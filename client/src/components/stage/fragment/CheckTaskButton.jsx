import React from 'react'

const CheckTaskButton = ({ onNextStage }) => (
  <button
    type="button"
    className="CheckExprButton btn btn-large btn-danger btn-block"
    onClick={() => onNextStage()}
  >
    Check answers
  </button>
)

export default CheckTaskButton
