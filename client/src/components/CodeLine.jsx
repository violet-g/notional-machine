import React from 'react'

const CodeLine = ({ line, onClick }) => (

  <span>
    <span className="CodeLine" onClick={onClick}>
      { line }
    </span>
  </span>
)

export default CodeLine
