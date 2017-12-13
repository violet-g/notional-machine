import React from 'react'
import Task from './Task'

class FlowOfControl extends React.Component {

  constructor(props) {
    super(props)
    this.state = { flows: [], mode: false }
  }

  // add flow to state
  handleLineSelect(lineIdx) {
    if (!this.state.mode) { // beginning of a new flow
      this.setState({
        flows: this.state.flows.concat([{
          startLineIdx: lineIdx
        }]),
        mode: !this.state.mode
      })
    } else { // close flow
      // prep the update
      let update = Object.assign(this.state.flows.slice(-1)[0], {
          endLineIdx: lineIdx
        })
      // normalise, i.e. handle backwards flow selection
      if (update.endLineIdx < update.startLineIdx) {
        let tempLine = update.startLineIdx
        update.startLineIdx = update.endLineIdx
        update.endLineIdx = tempLine
      }
      this.setState({
        expressions: this.state.flows.slice(0, -1).concat([ update ]),
        mode: !this.state.mode
      })
    }
  }

  render() {

    const codeFragment = [
      'a = 0',
      'while a < 3',
      '  print a',
      '  a = a + 1',
      'print a'
    ].join('\n')

    console.log(this.state)

    return (
      <div>
        <Task stage={this.props.stage} />
      </div>
    )
  }
}

export default FlowOfControl
