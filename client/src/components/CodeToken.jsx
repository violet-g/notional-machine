import React from 'react'
import DeleteExprButton from './DeleteExprButton'

const CodeToken = ({ token, mode, onClick, isSelected, isHighlighted, isStart, isEnd, onMouseOnToken, onDelete }) => (
  <span>
    <span className={ "CodeToken" +
      (isHighlighted ? " highlighted" : "") +
      (isSelected ? " selected" : "") +
      (isSelected && isStart ? " start" : "") +
      (isSelected && isEnd ? " end" : "")}
      onClick={onClick}
      onMouseOver={onMouseOnToken}>
      { token }
    </span>
    {isEnd && <DeleteExprButton onDelete={onDelete} />}
  </span>
)

export default CodeToken
