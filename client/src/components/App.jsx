import React from 'react'
import Task from './Task'
import CodeFragment from './CodeFragment'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = { expressions: [] }
  }

  handleFirstToken(lineIdx, tokenIdx) {
    this.setState({
      expressions: this.state.expressions.concat([{
        startLineIdx: lineIdx,
        startTokenIdx: tokenIdx
      }])
    })
  }

  handleLastToken(lineIdx, tokenIdx) {
    let update = Object.assign(this.state.expressions.slice(-1)[0], {
        endLineIdx: lineIdx,
        endTokenIdx: tokenIdx
      })
    if (update.endLineIdx < update.startLineIdx) {
      let tempLine = update.startLineIdx
      let tempToken = update.startTokenIdx
      update.startLineIdx = update.endLineIdx
      update.startTokenIdx = update.endTokenIdx
      update.endLineIdx = tempLine
      update.endTokenIdx = tempToken
    } else if (update.endLineIdx === update.startLineIdx && update.endTokenIdx < update.startTokenIdx) {
      let tempToken = update.startTokenIdx
      update.startTokenIdx = update.endTokenIdx
      update.endTokenIdx = tempToken
    }
    this.setState({
      expressions: this.state.expressions.slice(0, -1).concat([ update ])
    })
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
          onFirstToken={(lineIdx,tokenIdx)=>this.handleFirstToken(lineIdx, tokenIdx)}
          onLastToken={(lineIdx, tokenIdx)=>this.handleLastToken(lineIdx, tokenIdx)}
          expressions={this.state.expressions}
        />
      </div>
    )
  }
}

export default App
