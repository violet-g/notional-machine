import React from 'react'
import CodeFragment from './fragment/CodeFragment'

const fragment = [
  { indent: 0, tokens: ['a', '=', '0'] },
  { indent: 0, tokens: ['while', 'a', '<', '3'] },
  { indent: 1, tokens: ['print', 'a'] },
  { indent: 1, tokens: ['a', '=', 'a', '+', '1'] },
  { indent: 0, tokens: ['print', 'a'] }
]

const App = () => (
  <div className="App">
    <CodeFragment fragment={fragment} />
  </div>
)

export default App

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
