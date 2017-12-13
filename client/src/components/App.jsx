import React from 'react'
import Expressions from './Expressions'
import FlowOfControl from './FlowOfControl'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = { stage: 1 }
  }

  handleStageChange(stage) {
    this.setState({ stage: stage })
  }

  render() {
    switch(this.state.stage) {
    case 1:
      return (
        <Expressions
          stage={this.state.stage}
          onNextStage={(stage)=>this.handleStageChange(stage)}
        />
      )
    case 2:
      return (
        <FlowOfControl
          stage={this.state.stage}
          onNextStage={(stage)=>this.handleStageChange(stage)}
        />)
    case 3:
      break
    default:
      return (<p> Something went wrong. </p>)
    }
  }
}

export default App
