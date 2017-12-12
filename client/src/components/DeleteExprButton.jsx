import React from 'react'

const DeleteExprButton = ({ onDelete }) => (
  <button type="button" className="close DeleteExprButton" aria-label="Close" onClick={onDelete}>
    <span aria-hidden="true">&times;</span>
  </button>
)

export default DeleteExprButton
