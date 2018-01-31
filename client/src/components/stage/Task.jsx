import React from 'react'
import CheckTaskButton from './fragment/CheckTaskButton'

const Task = ({ instructions, onNextStage, children }) => (
  <div className="Task">
    <div className="TaskInstructions">{instructions}</div>
    {children}
    {onNextStage && <CheckTaskButton onNextStage={onNextStage} />}
  </div>
)

export default Task
