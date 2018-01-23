import React from 'react'
import Task from './Task'
import CodeFragment from './fragment/CodeFragment'

const Stage = ({ task, fragment }) => (
  <div>
    <Task task={task} />
    <CodeFragment fragment={fragment} />
  </div>
)

export default Stage
