import React from 'react'
import client from '../api-client'

const Signup = ({ username, password, onChange, onSignup }) => (
  <div className="Signup">
    <form className="form" onSubmit={onSignup}>
      <h1>Sign up</h1>
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
        <button type="submit" className="btn btn-primary">Sign up</button>
      </div>
    </form>
  </div>
)

class SignupContainer extends React.Component {
  constructor () {
    super()
    this.state = { username: '', password: '' }
  }
  handleChange (e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  async handleSignup (e) {
    e.preventDefault()
    try {
      const pupil = await client.resource('pupil').create(this.state)
      this.props.history.push('/')
    } catch (error) {
      console.log(error)
      this.props.hitory.push('/error')
    }
  }
  render () {
    return (<Signup {...this.state} onChange={this.handleChange.bind(this)} onSignup={this.handleSignup.bind(this)} />)
  }
}

export default SignupContainer
