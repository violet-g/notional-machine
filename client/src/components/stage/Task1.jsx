import React from 'react'
import Token from './fragment/Token'
import Line from './fragment/Line'
import Expression from './fragment/Expression'
import CodeFragment from './fragment/CodeFragment'
import Task from './Task'
import times from 'lodash/times'

class Task1 extends React.Component {
  constructor () {
    super()
    this.state = {
      selecting: false,
      expressions: [],
      lastHoveredToken: null,
      lastSelectedToken: null
    }
  }

  handleTokenMouseOver (lineIdx, tokenIdx) {
    this.setState({ lastHoveredToken: [lineIdx, tokenIdx] })
  }

  handleTokenSelect (lineIdx, tokenIdx) {
    const { lastSelectedToken } = this.state
    let expressions = [...this.state.expressions]
    if (this.state.selecting) {
      if (lineIdx !== lastSelectedToken[0]) {
        return
      }

      // TODO prevent selection of overlapping expressions
      const startToken = Math.min(lastSelectedToken[1], tokenIdx)
      const endToken = Math.max(lastSelectedToken[1], tokenIdx)

      expressions = [...expressions, [lineIdx, startToken, endToken]]
    }

    this.setState({
      selecting: !this.state.selecting,
      lastSelectedToken: [lineIdx, tokenIdx],
      expressions
    })
  }

  handleExprDelete (i) {
    const expressions = this.state.expressions
    this.setState({ expressions: [...expressions.slice(0, i), ...expressions.slice(i + 1)] })
  }

  isTokenHighlighted (lineIdx, tokenIdx) {
    const { lastHoveredToken, lastSelectedToken } = this.state
    if (lastHoveredToken === null || lastSelectedToken === null || !this.state.selecting) {
      return false
    }
    if (lineIdx === lastSelectedToken[0] && tokenIdx === lastSelectedToken[1]) {
      return true
    }
    if (lastHoveredToken[0] !== lastSelectedToken[0]) {
      return false
    }
    if (lineIdx !== lastSelectedToken[0]) {
      return false
    }
    const maxIdx = Math.max(lastHoveredToken[1], lastSelectedToken[1])
    const minIdx = Math.min(lastHoveredToken[1], lastSelectedToken[1])
    return minIdx <= tokenIdx && tokenIdx <= maxIdx
  }

  handleNextStage () {
    this.props.onNextStage({ expressions: this.state.expressions })
  }

  render () {
    const { fragment } = this.props

    const lines = fragment.map((line, i) =>
      <Line key={i} indent={line.indent}>
        {line.tokens.map((token, j) =>
          <Token
            key={[i, j].join('_')}
            content={token}
            onMouseOver={this.handleTokenMouseOver.bind(this, i, j)}
            onClick={this.handleTokenSelect.bind(this, i, j)}
            highlighted={this.isTokenHighlighted(i, j)}
          />
        )}
      </Line>
    )

    const expressions = this.state.expressions.map((expression, i) =>
      <Expression
        key={['expr', i].join('_')}
        line={expression[0]}
        start={expression[1]}
        end={expression[2]}
        onDelete={() => this.handleExprDelete(i)} />
    )

    return (
      <Task {...this.props} onNextStage={this.handleNextStage.bind(this)}>
        <CodeFragment>
          {lines}
          {expressions}
        </CodeFragment>
      </Task>
    )
  }
}

export default Task1
