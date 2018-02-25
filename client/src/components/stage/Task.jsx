import React from 'react'
import CheckTaskButton from './fragment/CheckTaskButton'

const Task = ({ instructions, onNextStage, children, submitted }) => (
  <div className="Task">
    <div className="TaskInstructions">{instructions}</div>
    <div className="container-fluid">{children}</div>
    {onNextStage && <CheckTaskButton onNextStage={onNextStage} submitted={submitted}/>}
  </div>
)

export default Task
