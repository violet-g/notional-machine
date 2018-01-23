import React from 'react'

const Task = ({ stage }) => {

  let FirstDescription = `
    Step 1: Read the following piece of code carefully and select all expressions
    that are used in its construction.
  `
  let SecondDescription = `
    Step 2: Visualise flow of control in the code below.
  `

  console.log(stage)

  switch (stage) {
    case 1:
      return (<pre className="Task">{FirstDescription}</pre>)
    case 2:
      return (<pre className="Task">{SecondDescription}</pre>)
    case 3:
      break
    default:
      return (<p> Something went wrong. </p>)

  }
}

export default Task
