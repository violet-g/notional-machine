import React from 'react'
import CodeFragment from './fragment/CodeFragment'
import Task from './Task'
import Line from './fragment/Line'
import Token from './fragment/Token'
import Expression from './fragment/Expression'
import Flow from './fragment/Flow'

class Task3 extends React.Component {
  constructor () {
    super()
    this.state = {}
  }

  render() {
    const lines = this.props.fragment.map((line, i) =>
      <Line key={i} indent={line.indent}>
        {line.tokens.map((token, j) =>
          <Token
            key={[i, j].join('_')}
            content={token}
          />
        )}
      </Line>
    )

    const expressions = this.props.expressions.map((expression, i) =>
      <Expression
        key={['expr', i].join('_')}
        line={expression[0]}
        start={expression[1]}
        end={expression[2]} />
    )

    const flows = this.props.flows.map((flow, i) =>
      <Flow
        key={['flow', i].join('_')}
        startLine={flow[0]}
        endLine={flow[1]} />
    )

    return (
      <Task instructions={this.props.instructions}>
        <CodeFragment>
          {lines}
          {expressions}
          {flows}
        </CodeFragment>
      </Task>
    )
  }
}

Task3.defaultsProps = {
  expressions: [],
  flows: []
}

export default Task3
