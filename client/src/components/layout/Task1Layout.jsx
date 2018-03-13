import React from 'react'
import Task from './Task'
import TaskInstructions from './TaskInstructions'
import CodeFragment from '../fragment/CodeFragment'

const Task1Layout = props => (
  <div className="Task1">
    <Task next={props.next}>
      <TaskInstructions>
        Step 1: Read the following piece of code carefully and select all expressions
        that are used in its construction.
      </TaskInstructions>

      <CodeFragment
        fragment={props.data.exercise.code_fragment}
        expressions={props.data.expressions}
        {...props}
      />
    </Task>
  </div>
)

export default Task1Layout
