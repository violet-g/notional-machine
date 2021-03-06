import React from 'react'
import maxBy from 'lodash/maxBy'
import VariableTable from '../variable-table/VariableTable'
import client from '../api-client'

/** Adds the functionality of the VariableTable component and visualises it **/
class VariableTableController extends React.Component {

  constructor () {
    super()
    this.state = {
      createVariableValue: '',
      updateVariableValue: '',
      active: null
    }
  }

  /** Opens the tab of the first variable at loading **/
  componentDidMount () {
    if (this.props.data.variables[0]) {
      this.setState({ active: this.props.data.variables[0].id })
    }
  }

  /** Gets the current step **/
  getLastStep () {
    return maxBy(this.props.data.steps, step => step.number)
  }

  /** Gets the variable that is being updated **/
  getLastActiveVariable () {
    const { name } = this.props.data.variables.find(variable => variable.id === this.state.active)
    const { variables } = this.props.data
    return maxBy(variables.filter(variable => variable.name === name), variable => variable.id)
  }

  /** Changes the active variable **/
  handleActiveChange (id) {
    this.setState({ active: id })
  }

  /** Adds value to the created variable **/
  handleCreateVariableChange (e) {
    this.setState({ createVariableValue: e.target.value })
  }

  /** Saves the creation of a variable **/
  async handleCreateVariableSubmit (e) {
    e.preventDefault()
    await client.resource('variable').create({ name: this.state.createVariableValue, step_ID: this.getLastStep().id })
    this.setState({ createVariableValue: '' })
    this.props.rehydrate()
  }

  /** Changes the value of a variable **/
  handleUpdateVariableChange (e) {
    this.setState({ updateVariableValue: e.target.value })
  }

  /** Caves the updated value of a variable **/
  async handleUpdateVariableSubmit (e) {
    e.preventDefault()
    const data = { value: this.state.updateVariableValue, step_ID: this.getLastStep().id }
    await client.resource('variable').update(this.getLastActiveVariable().id, data)
    this.setState({ updateVariableValue: '' })
    this.props.rehydrate()
  }

  /** Sets up the update of a variable value **/
  async handleUpdateVariableClick () {
    const variable = this.props.data.variables.find(variable => variable.id === this.state.active)
    await client.resource('variable').create({ name: variable.name, step_ID: this.getLastStep().id })
    this.props.rehydrate()
  }

  render () {
    return (
      <VariableTable
        readOnly={this.props.readOnly}
        correct={this.props.correct}
        incorrect={this.props.incorrect}
        variables={this.props.data.variables}
        steps={this.props.data.steps}
        active={this.state.active}
        onActiveChange={this.handleActiveChange.bind(this)}
        create={{
          value: this.state.createVariableValue,
          onChange: this.handleCreateVariableChange.bind(this),
          onSubmit: this.handleCreateVariableSubmit.bind(this)
        }}
        update={{
          value: this.state.updateVariableValue,
          onChange: this.handleUpdateVariableChange.bind(this),
          onSubmit: this.handleUpdateVariableSubmit.bind(this),
          onUpdateClick: this.handleUpdateVariableClick.bind(this)
        }}
      />
    )
  }
}

export default VariableTableController
