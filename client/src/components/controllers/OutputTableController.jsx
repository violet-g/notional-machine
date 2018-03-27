import React from 'react'
import maxBy from 'lodash/maxBy'
import client from '../api-client'
import OutputTable from '../output-table/OutputTable'

/*"" Adds the functionality of the OutputTable component and visualises it **/
class OutputTableController extends React.Component {

  constructor () {
    super()
    this.state = { value: '', displayForm: false }
  }

  /** Gets the current step **/
  getLastStep () {
    return maxBy(this.props.data.steps, step => step.number)
  }

  /** Updates the state with the changes made by the user **/
  handleChange (e) {
    this.setState({ value: e.target.value })
  }

  /** Saves the new output **/
  async handleSubmit (e) {
    e.preventDefault()
    await client.resource('step').update(this.getLastStep().id, { output: this.state.value })
    this.setState({ displayForm: false, value: '' })
    this.props.rehydrate()
  }

  /** Displays the new row **/
  handleAdd () {
    this.setState({ displayForm: true })
  }

  render () {
    return (
      <OutputTable
        readOnly={this.props.readOnly}
        correct={this.props.correct}
        incorrect={this.props.incorrect}
        steps={this.props.data.steps}
        displayForm={this.state.displayForm}
        value={this.state.value}
        onChange={this.handleChange.bind(this)}
        onSubmit={this.handleSubmit.bind(this)}
        onAdd={this.handleAdd.bind(this)}
      />
    )
  }
}

export default OutputTableController
