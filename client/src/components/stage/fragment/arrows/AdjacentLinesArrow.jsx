import React from 'react'
import classnames from 'classnames'
import {
  CODE_FRAGMENT_PADDING_HORIZONTAL,
  CODE_FRAGMENT_PADDING_VERTICAL,
  LINE_WIDTH,
  LINE_HEIGHT,
  ADJACENT_LINES_ARROW_SVG_WIDTH,
  ADJACENT_LINES_ARROW_SVG_HEIGHT
} from '../dimensions'

const AdjacentLinesArrow = ({ startLine, selected, correct, incorrect, onClick, onDelete }) => {
  const x = CODE_FRAGMENT_PADDING_HORIZONTAL + LINE_WIDTH / 2 - ADJACENT_LINES_ARROW_SVG_WIDTH
  const y = CODE_FRAGMENT_PADDING_VERTICAL + (startLine + 1) * LINE_HEIGHT - ADJACENT_LINES_ARROW_SVG_HEIGHT / 2
  return (
    <div
      className={classnames('AdjacentLinesArrow', { correct, incorrect })}
      style={{ left: x + 'px', top: y + 'px' }}
    >
      {selected && !correct && !incorrect && <div className="delete-btn" onClick={onDelete}>x</div>}
      <div className="arrowhead" onClick={onClick} />
      <div className="line" onClick={onClick} />
    </div>
  )
}

export default AdjacentLinesArrow
