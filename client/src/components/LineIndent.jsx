import React from 'react'

const LineIndent = ({ indent }) => {
  let indentLength = 10*indent
  return <span className="LineIndent" style={{ marginLeft: indentLength+"px" }}></span>
}

export default LineIndent
