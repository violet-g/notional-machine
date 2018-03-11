import React from 'react'
import TaskButton from './TaskButton'

const Task = ({ children, next }) => (
  <div className="Task">
    <div className="container-fluid">{children}</div>
    <TaskButton {...next} />
  </div>
)

Task.defaultProps = {
  next: { to: '/', text: 'Next' }
}

export default Task
