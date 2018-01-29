import React from 'react'
import Line from './fragment/Line'
import Token from './fragment/Token'
import Flow from './fragment/Flow'
import CodeFragment from './fragment/CodeFragment'

class Task2 extends React.Component {
  constructor () {
    super()
    this.state = {
      selecting: false,
      lastSelectedLine: -1,
      flows: []
    }
  }

  handleLineSelect (idx) {
    let flows = []
    if (this.state.selecting && this.state.lastSelectedLine !== idx) {
      flows = [[this.state.lastSelectedLine, idx]]
    }
    this.setState({
      selecting: !this.state.selecting,
      lastSelectedLine: idx,
      flows: [...this.state.flows, ...flows]
    })
  }

  render () {
    console.log(this.state.selecting)
    
    const { fragment } = this.props
    const lines = fragment.map((line, i) =>
      <Line
        key={i}
        indent={line.indent}
        onClick={this.handleLineSelect.bind(this, i)}
        highlightable={true}
        highlighted={this.state.selecting && this.state.lastSelectedLine === i}>
        {line.tokens.map((token, j) => (
          <Token key={[i, j].join('_')} content={token} />
        ))}
      </Line>
    )

    const flows = this.state.flows.map((flow, i) =>
      <Flow
        key={i}
        startLine={flow[0]}
        endLine={flow[1]}
        lines={lines}
        refs={this.refs}
      />
    )

    return (
      <div className="Task2">
        <CodeFragment>
          {lines}
          {flows}
        </CodeFragment>
      </div>
    )
  }
}

export default Task2
