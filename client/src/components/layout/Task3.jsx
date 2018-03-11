import React from 'react'
import Task from './Task'
import TaskInstructions from './TaskInstructions'
import CodeFragment from '../fragment/CodeFragment'

const Task3 = ({ data, next }) => (
  <div className="Task3">
    <Task next={next}>
      <TaskInstructions>Step 3: Do step 3.</TaskInstructions>

      <CodeFragment
        fragment={data.exercise.code_fragment}
        expressions={data.expressions}
        flows={data.arrows}
      />
    </Task>
  </div>
)

export default Task3
