import React from 'react'

/** Button that consumes an input at a specific step **/
const ConsumeButton = ({ onClick }) => (
  <button type="button" className="btn btn-sm btn-outline-secondary" onClick={onClick}>
    Consume
  </button>
)

export default ConsumeButton
