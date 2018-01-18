import React from 'react'

const CodeLine = ({ line, onClick, arrow, style }) => (

  <span className="CodeLine" onClick={onClick} style={style}>
    <span className="TextWrapper">{ line }</span>
    { arrow }
  </span>
)

export default CodeLine
