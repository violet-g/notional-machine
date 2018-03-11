import React from 'react'
import Task1 from './stage/Task1'
import Task2 from './stage/Task2'
import Task3 from './stage/Task3'

class Exercise extends React {
  constructor () {
    super()
    this.state = { stage: 1 }
  }
  handleStageChange (stage) {
    this.setState({ stage })
  }
  render () {
    const { tasks, fragment, solution } = this.props

    switch(this.state.stage) {
      case 1:
        return (
          <Task1
            instructions={tasks[0]}
            fragment={fragment}
            solution={solution.expressions}
            onNextStage={this.handleStageChange.bind(this, 2)}
          />
      )
      case 2:
        return (
          <Task2
            instructions={tasks[1]}
            fragment={fragment}
            expressions={solution.expressions}
            solution={solution.flows}
            onNextStage={this.handleStageChange.bind(this, 3)}
          />
      )
      case 3:
        return (
          <Task3
            instructions={tasks[2]}
            fragment={fragment}
            expressions={solution.expressions}
            flows={solution.flows}
            inputs={solution.inputs}
          />
        )
      default:
        return (<p> Something went wrong. </p>)
    }
  }
}

export default Exercise
