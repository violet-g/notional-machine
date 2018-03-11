import React from 'react'
import Task from './Task'
import TaskInstructions from './TaskInstructions'
import CodeFragment from '../fragment/CodeFragment'

const Task2 = ({ data, next, annotation, highlighted, selected, onClick, onFlowClick, onDelete, popover }) => (
  <div className="Task2">
    <Task next={next}>
      <TaskInstructions>Step 2: Visualise flow of control in the code below.</TaskInstructions>

      <CodeFragment
        fragment={data.exercise.code_fragment}
        expressions={data.expressions}
        flows={data.arrows}
        flow={{ selected, onClick: onFlowClick, onDelete, annotation }}
        popover={popover}
        line={{ highlightable: true, highlighted, onClick }}
      />
    </Task>
  </div>
)

export default Task2
