import React from 'react'
import Line from './fragment/Line'
import Token from './fragment/Token'
import Flow from './fragment/Flow'
import CodeFragment from './fragment/CodeFragment'
import Expression from './fragment/Expression'
import Task from './Task'
import uniq from 'lodash/uniq'

class Task2 extends React.Component {
  constructor () {
    super()
    this.state = {
      selecting: false,
      lastSelectedLine: -1,
      flows: [],
      selectedFlows: [],
      submitted: false
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

  handleFlowSelect (i) {
    const { selectedFlows } = this.state
    this.setState({ selectedFlows: uniq([...selectedFlows, i]) })
  }

  handleFlowDelete (i) {
    const { flows, selectedFlows } = this.state
    this.setState({
      flows: [...flows.slice(0, i), ...flows.slice(i + 1)],
      selectedFlows: selectedFlows.filter(idx => i !== idx).map(idx => idx > i ? (idx - 1) : idx)
    })
  }

  handleFlowAnnotate (i, label) {
    const { flows, selectedFlows } = this.state
    this.setState({
      flows: [...flows.slice(0, i), [...flows[i].slice(0, 2), label], ...flows.slice(i + 1)],
      selectedFlows: selectedFlows.filter(idx => i !== idx)
    })
  }

  handleNextStage () {
    if (this.state.submitted) {
      this.props.onNextStage()
      return
    }
    this.setState({ submitted: true })
  }

  isFlowCorrect (start, end) {
    return this.state.submitted && !!this.props.solution.find(flow => flow[0] === start && flow[1] === end)
  }

  isFlowIncorrect (start, end) {
    return this.state.submitted && !this.isFlowCorrect(start, end)
  }

  isMissedSolution (solution) {
    return !this.state.flows.find(flow => flow[0] === solution[0] && flow[1] === solution[1])
  }

  render () {
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

    let flows = this.state.flows.map((flow, i) =>
      <Flow
        key={i}
        startLine={flow[0]}
        endLine={flow[1]}
        annotation={flow[2]}
        selected={this.state.selectedFlows.find(idx => idx === i) !== undefined}
        correct={this.isFlowCorrect(...flow)}
        incorrect={this.isFlowIncorrect(...flow)}
        onClick={() => this.handleFlowSelect(i)}
        onDelete={() => this.handleFlowDelete(i)}
        onAnnotate={(label) => this.handleFlowAnnotate(i, label)}
      />
    )

    // also display flows which were missed by the pupil
    if (this.state.submitted) {
      flows = flows.concat(this.props.solution.filter(this.isMissedSolution.bind(this)).map((flow, i) =>
        <Flow
          key={['flow_solution', i].join('_')}
          startLine={flow[0]}
          endLine={flow[1]}
          incorrect={true}
        />
      ))
    }
    
    const expressions = this.props.expressions.map((expression, i) =>
      <Expression
        key={['expr', i].join('_')}
        line={expression[0]}
        start={expression[1]}
        end={expression[2]} />
    )

    return (
      <Task {...this.props} onNextStage={this.handleNextStage.bind(this)}>
        <CodeFragment>
          {lines}
          {flows}
          {expressions}
        </CodeFragment>
      </Task>
    )
  }
}

export default Task2
