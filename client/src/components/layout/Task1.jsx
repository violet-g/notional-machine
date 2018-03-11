import React from 'react'
import Task from './Task'
import TaskInstructions from './TaskInstructions'
import CodeFragment from '../fragment/CodeFragment'

const Task1 = ({ data, highlighted, onClick, onMouseOver, onDelete, next }) => (
  <div className="Task1">
    <Task next={next}>
      <TaskInstructions>
        Step 1: Read the following piece of code carefully and select all expressions
        that are used in its construction.
      </TaskInstructions>

      <CodeFragment
        fragment={data.exercise.code_fragment}
        expressions={data.expressions}
        token={{ onClick, onMouseOver, highlighted }}
        expression={{ onDelete }}
      />
    </Task>
  </div>
)

export default Task1
