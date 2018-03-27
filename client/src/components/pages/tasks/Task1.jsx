import React from 'react'
import client from '../../api-client'
import hydrate from './hydrate'
import Task1Layout from '../../layout/Task1Layout'

/** Represents the first task of an exercise **/
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

  /** Saves a selected expression **/
  async saveExpression (line, start, end) {
    const id = this.props.data.solution.id
    const data = { line, start_pos: start, end_pos: end, solution_ID: id }
    await client.resource('expression').create(data)
    this.props.rehydrate()
  }

  /** Start/end a new expression **/
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

  /** Hover over a token **/
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

  /** Delete an expression **/
  async handleDelete (id) {
    await client.resource('expression').remove(id)
    this.props.rehydrate()
  }

  /** Check if a token is part of an expression to highlight it **/
  isHighlighted (line, token) {
    const { highlight } = this.state
    return highlight && highlight[0] === line && token >= highlight[1] && token <= highlight[2]
  }
  
  render () {
    return (
      <Task1Layout
        {...this.props}
        {...this.state}
        token={{
          onClick: this.handleClick.bind(this),
          onMouseOver: this.handleMouseOver.bind(this),
          highlighted: this.isHighlighted.bind(this)
        }}
        expression={{ onDelete: this.handleDelete.bind(this) }}
      />
    )
  }
}

Task1.defaultProps = {
  next: { to: '1/solution', text: 'Check Expressions' }
}

export { Task1 }

export default hydrate(Task1)
