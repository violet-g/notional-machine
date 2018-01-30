import React from 'react'
import Task1 from './stage/Task1'
import Task2 from './stage/Task2'

const tasks = [
  'Step 1: Read the following piece of code carefully and select all expressions that are used in its construction.',
  'Step 2: Visualise flow of control in the code below.'
]

const fragment = [
  { indent: 0, tokens: ['a', '=', '0'] },
  { indent: 0, tokens: ['while', 'a', '<', '3'] },
  { indent: 1, tokens: ['print', 'a'] },
  { indent: 1, tokens: ['a', '=', 'a', '+', '1'] },
  { indent: 0, tokens: ['a', '=', 'a', '*', '5'] },
  { indent: 0, tokens: ['print', 'a'] }
]

class App extends React.Component {
  constructor () {
    super()
    this.state = { stage: 1 }
  }

  handleStageChange(stage) {
    this.setState({ stage: stage })
  }

  render() {
    switch(this.state.stage) {
    case 1:
      return (
        <Task1
          instructions={tasks[0]}
          fragment={fragment}
          onNextStage={()=>this.handleStageChange(2)}
        />
      )
    case 2:
      return (
        <Task2
          instructions={tasks[1]}
          fragment={fragment}
          onNextStage={()=>this.handleStageChange(3)}
        />
      )
    case 3:
      break
    default:
      return (<p> Something went wrong. </p>)
    }
  }
}

export default App
