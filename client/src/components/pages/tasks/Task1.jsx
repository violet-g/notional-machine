import React from 'react'
import client from '../../api-client'
import hydrate from './hydrate'
import Task1Layout from '../../layout/Task1'

class Task1 extends React.Component {
  constructor () {
    super()
    this.state = {
      selecting: false,
      lastHoveredToken: null,
      lastSelectedToken: null,
      highlight: null
    }
  }
  async saveExpression (line, start, end) {
    const id = this.props.data.solution.id
    const data = { line, start_pos: start, end_pos: end, solution_ID: id }
    await client.resource('expression').create(data)
    this.props.rehydrate()
  }
  handleClick (line, token) {
    if (!this.state.selecting) {
      this.setState({ selecting: true, lastSelectedToken: { line, token } })
      return
    }
    if (line === this.state.lastSelectedToken.line) {
      const start = Math.min(token, this.state.lastSelectedToken.token)
      const end = Math.max(token, this.state.lastSelectedToken.token)
      this.saveExpression(line, start, end)
    }
    this.setState({ selecting: false, lastSelectedToken: { line, token }, highlight: null })
  }
  handleMouseOver (line, token) {
    this.setState({ lastHoveredToken: { line, token } })
    if (this.state.selecting) {
      const start = Math.min(this.state.lastSelectedToken.token, token)
      const end = Math.max(this.state.lastSelectedToken.token, token)
      if (line === this.state.lastSelectedToken.line) {
        this.setState({ highlight: [line, start, end] })
      } else {
        this.setState({ highlight: null })
      }
    }
  }
  async handleDelete (id) {
    await client.resource('expression').remove(id)
    this.props.rehydrate()
  }
  isHighlighted (line, token) {
    const { highlight } = this.state
    return highlight && highlight[0] === line && token >= highlight[1] && token <= highlight[2]
  }
  render () {
    return (
      <Task1Layout
        {...this.props}
        {...this.state}
        onClick={this.handleClick.bind(this)}
        onMouseOver={this.handleMouseOver.bind(this)}
        onDelete={this.handleDelete.bind(this)}
        highlighted={this.isHighlighted.bind(this)}
        next={{ to: '1/solution', text: 'Check Expressions' }}
      />
    )
  }
}

export default hydrate(Task1)
