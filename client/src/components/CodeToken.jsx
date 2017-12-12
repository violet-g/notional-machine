import React from 'react'

const CodeToken = ({ token, mode, onClick, isSelected, isHighlighted, isStart, isEnd, onMouseOnToken }) => (
  <span className={ "CodeToken" +
    (isHighlighted ? " highlighted" : "") +
    (isSelected ? " selected" : "") +
    (isSelected && isStart ? " start" : "") +
    (isSelected && isEnd ? " end" : "")}
    onClick={onClick}
    onMouseOver={onMouseOnToken}>
    { token }
  </span>
)

export default CodeToken
