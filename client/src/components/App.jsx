import React from 'react'
import Task1 from './stage/Task1'
import Task2 from './stage/Task2'
import Task3 from './stage/Task3'

const tasks = [
  'Step 1: Read the following piece of code carefully and select all expressions that are used in its construction.',
  'Step 2: Visualise flow of control in the code below.',
  'Step 3: Do step 3.'
]

const fragment = [
  { indent: 0, tokens: ['a', '=', '0'] },
  { indent: 0, tokens: ['while', 'a', '<', '3'] },
  { indent: 1, tokens: ['print', 'a'] },
  { indent: 1, tokens: ['a', '=', 'a', '+', '1'] },
  { indent: 0, tokens: ['a', '=', 'a', '*', '5'] },
  { indent: 0, tokens: ['print', 'a'] }
]

const expressions = [
  [0, 2, 2],
  [1, 1, 3],
  [2, 1, 1],
  [3, 2, 4],
  [4, 2, 4],
  [5, 1, 1]
]

const flows = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 1],
  [3, 4],
  [4, 5]
]

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      stage: 1,
      expressions: []
    }
  }

  handleStageChange (stage, params = {}) {
    if (params.expressions) {
      this.setState({ expressions: params.expressions })
    }
    this.setState({ stage: stage })
  }

  render() {
    switch(this.state.stage) {
    case 1:
      return (
        <Task1
          instructions={tasks[0]}
          fragment={fragment}
          onNextStage={this.handleStageChange.bind(this, 2)}
        />
      )
    case 2:
      return (
        <Task2
          instructions={tasks[1]}
          fragment={fragment}
          expressions={this.state.expressions}
          onNextStage={()=>this.handleStageChange(3)}
        />
      )
    case 3:
      return (
        <Task3
          instructions={tasks[2]}
          fragment={fragment}
          expressions={this.state.expressions}
          flows={flows}
        />
      )
    default:
      return (<p> Something went wrong. </p>)
    }
  }
}

export default App
