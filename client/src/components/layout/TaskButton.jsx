import React from 'react'
import { Link } from 'react-router-dom'

/** Represents the button used to complete a task **/
const TaskButton = ({ text, to }) => (
  <Link to={to} className="CheckExprButton btn btn-large btn-danger btn-block">
    {text}
  </Link>
)

export default TaskButton
