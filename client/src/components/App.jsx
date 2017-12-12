import React from 'react'
import Task from './Task'
import CodeFragment from './CodeFragment'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = { expressions: [], mode: false, currToken: -1, lastStartToken: -1 }
  }

  // add expression to state
  handleTokenSelect(tokenIdx) {
    if (!this.state.mode) { // beginning of a new expression
      this.setState({
        expressions: this.state.expressions.concat([{
          startTokenIdx: tokenIdx
        }]),
        mode: !this.state.mode,
        lastStartToken: tokenIdx
      })
    } else { // close expression
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

  // save token on which the user hovers
  handleMouseOnToken(tokenId) {
    this.setState({ currToken: tokenId })
  }

  // delete expression
  handleDeleteExpr(endIdx) {
    let exprIdx = this.state.expressions.map((expr) => expr.endTokenIdx).indexOf(endIdx)
    this.setState({ expressions: this.state.expressions.slice(0, exprIdx).
      concat(this.state.expressions.slice(exprIdx + 1)) })
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
      Step 1: Read the following piece of code carefully and select all expressions
      that are used in its construction.
    `
    console.log(this.state)

    return (
      <div>
        <Task taskDescription={taskDescription} />
        <div className="CodeFragment">
          <CodeFragment
            codeFragment={codeFragment}
            expressions={this.state.expressions}
            currToken={this.state.currToken}
            lastStartToken={this.state.lastStartToken}
            mode={this.state.mode}
            onTokenSelect={(tokenIdx)=>this.handleTokenSelect(tokenIdx)}
            onMouseOnToken={(tokenIdx)=>this.handleMouseOnToken(tokenIdx)}
            onDelete={(endIdx)=>this.handleDeleteExpr(endIdx)}
          />
        </div>
      </div>
    )
  }
}

export default App
