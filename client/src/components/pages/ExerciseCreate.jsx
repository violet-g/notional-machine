import React from 'react'
import client from '../api-client'

const ExerciseCreate = ({ value, onChange, onCreate }) => (
  <div className="ExerciseCreate">
    <form className="form" onSubmit={onCreate}>
      <div className="form-group">
        <textarea className="form-control" value={value} onChange={onChange} />
      </div>
      <button type="submit" className="btn btn-primary btn-lg">Create</button>
    </form>
  </div>
)

class ExerciseCreateContainer extends React.Component {
  constructor () {
    super()
    this.state = { value: '' }
  }
  handleChange (e) {
    this.setState({ value: e.target.value })
  }
  async handleCreate (e) {
    e.preventDefault()
    try {
      await client.resource('exercise').create({ code_fragment: this.state.value })
      this.props.history.push('/')
    } catch (error) {
      console.log(error)
      this.props.hitory.push('/error')
    }
  }
  render () {
    return (
      <ExerciseCreate
        {...this.state}
        onChange={this.handleChange.bind(this)}
        onCreate={this.handleCreate.bind(this)}
      />
    )
  }
}

export default ExerciseCreateContainer
