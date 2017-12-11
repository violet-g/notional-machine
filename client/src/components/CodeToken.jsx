import React from 'react'

const CodeToken = ({ token, mode, onClick, selected, highlighted, isStart, isEnd, onMouseOnToken }) => (
  <span className={ "CodeToken" +
    (selected ? " selected" : "") +
    (highlighted ? " highlighted" : "") +
    (highlighted && isStart ? " start" : "") +
    (highlighted && isEnd ? " end" : "")}
    onClick={onClick}
    onMouseOver={onMouseOnToken}>
    { token }
  </span>
)

export default CodeToken
