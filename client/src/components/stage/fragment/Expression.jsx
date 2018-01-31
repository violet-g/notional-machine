import React from 'react'

const Expression = ({ children, onDelete }) => (
  <span className="Expression">
    {children}
    {onDelete && <span className="DeleteExprButton" onClick={onDelete}>x</span>}
  </span>
)

export default Expression
