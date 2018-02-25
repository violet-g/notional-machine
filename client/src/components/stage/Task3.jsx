import React from 'react'
import CodeFragment from './fragment/CodeFragment'
import Task from './Task'
import Line from './fragment/Line'
import Token from './fragment/Token'
import Expression from './fragment/Expression'
import Flow from './fragment/Flow'
import VariableTable from './VariableTable'

class Task3 extends React.Component {
  constructor () {
    super()
    this.state = { variables: [], flows: [], nextAnnotationIdx: 1 }
  }

  componentDidMount () {
    this.setState({ flows: this.props.flows })
  }

  handleVariableAdd () {
    this.setState({ variables: [...this.state.variables, { steps: [] }] })
  }

  handleStepAdd (idx) {
    const variables = [
      ...this.state.variables.slice(0, idx),
      { steps: [...this.state.variables[idx].steps, []] },
      ...this.state.variables.slice(idx + 1)
    ]
    this.setState({ variables })
  }

  handleFlowAnnotate (idx) {
    const { flows, nextAnnotationIdx } = this.state
    const annotation = flows[idx][2] ? flows[idx][2] + ', ' + nextAnnotationIdx : nextAnnotationIdx + ''
    this.setState({
      flows: [
        ...flows.slice(0, idx),
        [...flows[idx].slice(0, 2), annotation],
        ...flows.slice(idx + 1)
      ],
      nextAnnotationIdx: nextAnnotationIdx + 1
    })
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

    const flows = this.state.flows.map((flow, i) =>
      <Flow
        key={['flow', i].join('_')}
        startLine={flow[0]}
        endLine={flow[1]}
        annotation={flow[2]}
        onClick={this.handleFlowAnnotate.bind(this, i)} />
    )

    return (
      <Task instructions={this.props.instructions}>
        <div className="row">
          <div className="col-lg-4" />
          <div className="col-lg-4">
            <CodeFragment>
              {lines}
              {expressions}
              {flows}
            </CodeFragment>
          </div>
          <div className="col-lg-4">
            <div className="section">
              <VariableTable
                variables={this.state.variables}
                onVariableAdd={this.handleVariableAdd.bind(this)}
                onStepAdd={this.handleStepAdd.bind(this)}
              />
              <div className="form-group">
                <label htmlFor="output">Output</label>
                <input id="output" className="form-control" type="text" placeholder="Output..." />
              </div>
            </div>
          </div>
        </div>
      </Task>
    )
  }
}

Task3.defaultsProps = {
  expressions: [],
  flows: []
}

export default Task3
