import React from 'react'
import Token from './fragment/Token'
import Line from './fragment/Line'
import Expression from './fragment/Expression'
import CodeFragment from './fragment/CodeFragment'
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

      expressions[lineIdx] = [
        ...(expressions[lineIdx] || []),
        [startToken, endToken]
      ].sort((a, b) => (a[0] < b[0]) ? -1 : 1)
    }

    this.setState({
      selecting: !this.state.selecting,
      lastSelectedToken: [lineIdx, tokenIdx],
      expressions
    })
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

  render () {
    const { fragment } = this.props

    const lines = fragment.map((line, i) => {
      let tokens = line.tokens.map((token, j) =>
        <Token
          key={[i, j].join('_')}
          content={token}
          onMouseOver={this.handleTokenMouseOver.bind(this, i, j)}
          onClick={this.handleTokenSelect.bind(this, i, j)}
          highlighted={this.isTokenHighlighted(i, j)} />
      )

      const expressions = this.state.expressions[i] || []
      for (let k = 0; k < expressions.length; k++) {
        const expression = expressions[k]
        const key = ['expr', i, k].join('_')
        tokens = [
          ...tokens.slice(0, expression[0]),
          <Expression key={key}>{tokens.slice(expression[0], expression[1] + 1)}</Expression>,
          ...times(expression[1] - expression[0], null).map(el => null),
          ...tokens.slice(expression[1] + 1)
        ]
      }

      return (<Line key={i} indent={line.indent}>{tokens}</Line>)
    })

    return (<CodeFragment>{lines}</CodeFragment>)
  }
}

export default Task1
