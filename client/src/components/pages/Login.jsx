import React from 'react'
import client from '../api-client'
import * as cookie from '../cookies'
import { USER_ID_COOKIE_NAME } from '../config'
import { Link } from 'react-router-dom'

/** Login page for pupils **/
const Login = ({ username, password, onChange, onLogin }) => (
  <div className="Login container">
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <form className="form" onSubmit={onLogin}>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Username"
              name="username"
              value={username}
              onChange={onChange} />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary btn-block">Log in</button>
          </div>
          <Link to='/signup'>No account yet?</Link>
        </form>
      </div>
    </div>
  </div>
)

/** Adds the functionality to the login page and visualises it **/
class LoginContainer extends React.Component {

  constructor () {
    super()
    this.state = { username: '', password: '' }
  }

  /** consume a change **/
  handleChange (e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  /** log a pupil in **/
  async handleLogin (e) {
    e.preventDefault()
    try {
      const [pupil] = await client.resource('pupil').find(this.state)
      if (!pupil) {
        this.setState({ username: '', password: '' })
        return
      }
      cookie.set(USER_ID_COOKIE_NAME, pupil.id)
      this.props.history.push('/exercise-list')
    } catch (error) {
      console.log(error)
      this.props.history.push('/error')
    }
  }
  
  render () {
    return (<Login {...this.state} onChange={this.handleChange.bind(this)} onLogin={this.handleLogin.bind(this)} />)
  }
}

export default LoginContainer
