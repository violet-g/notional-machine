
import React from 'react'
import Stage from './Stage'

const tasks = [
  'Step 1: Read the following piece of code carefully and select all expressions
  that are used in its construction.',
  'Step 2: Visualise flow of control in the code below.'
]

const fragment = [
  { indent: 0, tokens: ['a', '=', '0'] },
  { indent: 0, tokens: ['while', 'a', '<', '3'] },
  { indent: 1, tokens: ['print', 'a'] },
  { indent: 1, tokens: ['a', '=', 'a', '+', '1'] },
  { indent: 0, tokens: ['print', 'a'] }
]

class App extends React.Component {
  constructor () {
    super ()
    this.state = {
      currentTask: 0
    }
  }

  render () {
    <div className="App">
      <Stage task={this.state.currentTask} fragment={fragment} />
    </div>
  }
}

export default App

//
// import React from 'react'
// import Expressions from './Expressions'
// import FlowOfControl from './FlowOfControl'
//
// class App extends React.Component {
//
//   constructor(props) {
//     super(props)
//     this.state = { stage: 1 }
//   }
//
//   handleStageChange(stage) {
//     this.setState({ stage: stage })
//   }
//
//   render() {
//     switch(this.state.stage) {
//     case 1:
//       return (
//         <Expressions
//           stage={this.state.stage}
//           onNextStage={(stage)=>this.handleStageChange(stage)}
//         />
//       )
//     case 2:
//       return (
//         <FlowOfControl
//           stage={this.state.stage}
//           onNextStage={(stage)=>this.handleStageChange(stage)}
//         />)
//     case 3:
//       break
//     default:
//       return (<p> Something went wrong. </p>)
//     }
//   }
// }
//
// export default App
