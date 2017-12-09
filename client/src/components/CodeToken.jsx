import React from 'react'

const CodeToken = ({ token, onMouseDown, onMouseUp, highlighted, isStart, isEnd }) => (
  <span className={
    "CodeToken" +
    (highlighted ? " highlighted" : "") +
    (isStart ? " start" : "") +
    (isEnd ? " end" : "")
  }
    onMouseDown={onMouseDown} onMouseUp={onMouseUp} >
    { token }
  </span>
)

export default CodeToken
