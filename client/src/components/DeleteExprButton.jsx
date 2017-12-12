import React from 'react'

const DeleteExprButton = ({ onDelete }) => (
  <span className="DeleteExprButton" onClick={onDelete}>
    <span aria-hidden="true">&times;</span>
  </span>
)

export default DeleteExprButton
