import React from 'react'
import hydrate from './hydrate'
import Task2Layout from '../../layout/Task2Layout'
import client from '../../api-client'

/** Represents the second task of an exercise **/
class Task2 extends React.Component {

  constructor () {
    super()
    this.state = { selecting: false, lastSelectedLine: null, lastSelectedFlow: null }
  }

  /** Saves a new flow **/
  async createFlow (start, end) {
    const data = { start_row: start, end_row: end, solution_ID: this.props.data.solution.id }
    await client.resource('arrow').create(data)
    this.props.rehydrate()
  }

  /** Deletes a selected flow **/
  async deleteFlow (id) {
    await client.resource('arrow').remove(id)
    this.props.rehydrate()
  }

  /** Updates an existing flow -> add annotations **/
  async updateFlow (id, data) {
    await client.resource('arrow').update(id, data)
    this.props.rehydrate()
  }

  /** Checks if a flow already exists **/
  flowExists (start, end) {
    return !!this.props.data.arrows.find(({ start_row, end_row }) => start_row === start && end_row === end)
  }

  /** Start/end a flow **/
  handleClick (line) {
    if (this.state.selecting) {
      if (this.state.lastSelectedLine !== line && !this.flowExists(this.state.lastSelectedLine, line)) {
        this.createFlow(this.state.lastSelectedLine, line)
      }
      this.setState({ selecting: false, lastSelectedLine: null })
      return
    }
    this.setState({ selecting: true, lastSelectedLine: line })
  }

  /** Checks if a line is selected **/
  isHighlighted (line) {
    return this.state.lastSelectedLine !== null && this.state.lastSelectedLine === line
  }

  /** Selects a flow to delete/annotate it **/
  handleFlowClick (id) {
    this.setState({ lastSelectedFlow: id })
  }

  /** Checks if a flow is selected **/
  isSelected (id) {
    return id === this.state.lastSelectedFlow
  }

  /** Deletes a flow **/
  handleDelete (id) {
    this.deleteFlow(id)
    this.setState({ lastSelectedFlow: null })
  }

  /** Returns the annotation of a flow **/
  getAnnotation (id) {
    const annotation = this.props.data.arrows.find(arrow => arrow.id === id).annotation
    if (annotation === true) {
      return 'T'
    }
    if (annotation === false) {
      return 'F'
    }
    return null
  }

  /** Annotates a flow **/
  handlePopoverClick (value) {
    this.updateFlow(this.state.lastSelectedFlow, { annotation: value === 'T' })
    this.setState({ lastSelectedFlow: null })
  }
  
  render () {
    return (
      <Task2Layout
        {...this.props}
        flow={{
          annotation: this.getAnnotation.bind(this),
          selected: this.isSelected.bind(this),
          onClick: this.handleFlowClick.bind(this),
          onDelete: this.handleDelete.bind(this)
        }}
        line={{
          highlightable: true,
          highlighted: this.isHighlighted.bind(this),
          onClick: this.handleClick.bind(this)
        }}
        popover={{
          flowId: this.state.lastSelectedFlow,
          onClick: this.handlePopoverClick.bind(this)
        }}
      />
    )
  }
}

Task2.defaultProps = {
  next: { to: '2/solution', text: 'Check Flows' }
}

export { Task2 }

export default hydrate(Task2)
