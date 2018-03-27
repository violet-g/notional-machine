import React from 'react'
import Task from './Task'
import TaskInstructions from './TaskInstructions'
import CodeFragment from '../fragment/CodeFragment'

/** Extends the generic task to represent the layout of task 2 **/
const Task2Layout = (props) => (
  <div className="Task2">
    <Task next={props.next}>
      <TaskInstructions>
        <p>Step 2: Visualise flow of control in the code below.</p>
        <p>Hint: Click on two consecutive lines to draw an arrow between them.</p>
      </TaskInstructions>
      <CodeFragment
        fragment={props.data.exercise.code_fragment}
        expressions={props.data.model.expressions}
        flows={props.data.arrows}
        {...props}
      />
    </Task>
  </div>
)

export default Task2Layout
