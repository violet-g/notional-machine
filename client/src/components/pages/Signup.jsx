import React from 'react'
import client from '../api-client'

/** Sign up page for pupils **/
const Signup = ({ username, password, onChange, onSignup }) => (
  <div className="Signup container">
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <form className="form" onSubmit={onSignup}>
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
            <button type="submit" className="btn btn-primary btn-block">Sign up</button>
          </div>
        </form>
      </div>
    </div>
  </div>
)

/** Adds the functionality to the sign up page and visualises it **/
class SignupContainer extends React.Component {

  constructor () {
    super()
    this.state = { username: '', password: '' }
  }

  handleChange (e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  /** sign a pupil in **/
  async handleSignup (e) {
    e.preventDefault()
    try {
      const pupil = await client.resource('pupil').create(this.state)
      this.props.history.push('/login')
    } catch (error) {
      console.log(error)
      this.props.history.push('/error')
    }
  }

  render () {
    return (<Signup {...this.state} onChange={this.handleChange.bind(this)} onSignup={this.handleSignup.bind(this)} />)
  }
}

export default SignupContainer
