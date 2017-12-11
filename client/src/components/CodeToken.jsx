import React from 'react'

const CodeToken = ({ token, mode, onClick, highlighted, isStart, isEnd }) => (
  <span className={ "CodeToken" +
    (highlighted ? " highlighted" : "") +
    (isStart ? " start" : "") +
    (isEnd ? " end" : "")}
    onClick={onClick}>
    { token }
  </span>
)

export default CodeToken
