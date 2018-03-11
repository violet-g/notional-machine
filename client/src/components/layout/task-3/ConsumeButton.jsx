import React from 'react'

const ConsumeButton = ({ onClick }) => (
  <button type="button" className="btn btn-sm btn-outline-secondary" onClick={onClick}>
    Consume
  </button>
)

export default ConsumeButton
