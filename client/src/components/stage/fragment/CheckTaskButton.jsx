import React from 'react'

const CheckTaskButton = ({ onNextStage, submitted }) => (
  <button
    type="button"
    className="CheckExprButton btn btn-large btn-danger btn-block"
    onClick={() => onNextStage()}
  >
    Check answers
    {submitted ? 'Continue to next task' : 'Check answers'}
  </button>
)

export default CheckTaskButton
