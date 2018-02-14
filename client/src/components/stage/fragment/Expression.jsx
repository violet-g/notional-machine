import React from 'react'

const Expression = ({ children, onDelete }) => (
  <span className="Expression badge badge-primary">
    {children}
    {onDelete && <span className="badge badge-danger delete-btn" onClick={onDelete}>x</span>}
  </span>
)

export default Expression
