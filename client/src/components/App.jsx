import React from 'react'
import Task from './Task'
import CodeFragment from './CodeFragment'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = { expressions: [], mode: false }
  }

  // add start of expression to state
  handleTokenSelect(tokenIdx) {
    if (!this.state.mode) {
      this.setState({
        expressions: this.state.expressions.concat([{
          startTokenIdx: tokenIdx
        }]),
        mode: !this.state.mode
      })
    } else {
      // prep the update
      let update = Object.assign(this.state.expressions.slice(-1)[0], {
          endTokenIdx: tokenIdx
        })
      // normalise, i.e. handle backwards expression selection
      if (update.endTokenIdx < update.startTokenIdx) {
        let tempToken = update.startTokenIdx
        update.startTokenIdx = update.endTokenIdx
        update.endTokenIdx = tempToken
      }
      this.setState({
        expressions: this.state.expressions.slice(0, -1).concat([ update ]),
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

    const taskDescription = `
      Read the following piece of code carefully and identify all expressions that are used in its construction.
      Please highlight the expressions to select them.

      (Hint: Highlight an expression again to deselect in case you change your mind.)
    `
    console.log(this.state)

    return (
      <div>
        <Task taskDescription={taskDescription} />
        <CodeFragment
          codeFragment={codeFragment}
          expressions={this.state.expressions}
          mode={this.state.mode}
          onTokenSelect={(tokenIdx)=>this.handleTokenSelect(tokenIdx)}
        />
      </div>
    )
  }
}

export default App
