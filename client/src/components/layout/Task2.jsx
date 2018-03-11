import React from 'react'
import Task from './Task'
import TaskInstructions from './TaskInstructions'
import CodeFragment from '../fragment/CodeFragment'

const Task2 = (props) => (
  <div className="Task2">
    <Task next={props.next}>
      <TaskInstructions>Step 2: Visualise flow of control in the code below.</TaskInstructions>

      <CodeFragment
        fragment={props.data.exercise.code_fragment}
        expressions={props.data.model.expressions}
        flows={props.data.arrows}
        {...props}
      />
    </Task>
  </div>
)

export default Task2
