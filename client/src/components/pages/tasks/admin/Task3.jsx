import React from 'react'
import hydrate from '../hydrate'
import { Task3 } from '../Task3'
import client from '../../../api-client'

class Task3Admin extends React.Component {
  constructor () {
    super()
    this.state = { inputs: {} }
  }
  componentDidMount () {
    this.setState({ steps: this.props.data.model.steps })
  }
  handleChange (id, value) {
    this.setState({ inputs: Object.assign({}, this.state.inputs, { [id]: value }) })
  }
  async handleSave () {
    for (const step of Object.keys(this.state.inputs)) {
      await client.resource('step').update(step, { input: this.state.inputs[step] })
    }
    this.props.rehydrate()
  }
  render () {
    return (
      <Task3
        {...this.props}
        input={{
          editable: true,
          onChange: this.handleChange.bind(this),
          onSave: this.handleSave.bind(this)
        }}
        next={{ to: '/', text: 'Next' }}
      />
    )
  }
}

export default hydrate(Task3Admin, { userId: 'NULL' })
