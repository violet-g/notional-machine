import React from 'react'
import { Link } from 'react-router-dom'

const TaskButton = ({ text, to }) => (
  <Link to={to} className="CheckExprButton btn btn-large btn-danger btn-block">
    {text}
  </Link>
)

export default TaskButton
