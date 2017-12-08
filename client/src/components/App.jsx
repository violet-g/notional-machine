import React from 'react'
import Task from './Task'
import CodeFragment from './CodeFragment'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = { expressions: [] }
  }

  render() {
    const codeFragment = `
      a = 0
      while a < 3
        print a
        a = a + 1
      print a
    `

    const taskDescription = `
      Read the following piece of code carefully and identify all expressions that are used in its construction.
      Please highlight the expressions to select them.

      (Hint: Highlight an expression again to deselect in case you change your mind.)
    `
    console.log(this.state)

    return (
      <div>
        <Task taskDescription={taskDescription} />
        <CodeFragment codeFragment={codeFragment} />
      </div>
    )
  }
}

export default App
