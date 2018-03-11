import React from 'react'
import PropTypes from 'prop-types'
import Flow from '../Flow'
import classnames from 'classnames'
import {
  CODE_FRAGMENT_PADDING_HORIZONTAL,
  CODE_FRAGMENT_PADDING_VERTICAL,
  LINE_WIDTH,
  LINE_HEIGHT,
  ADJACENT_LINES_ARROW_SVG_WIDTH,
  ADJACENT_LINES_ARROW_SVG_HEIGHT
} from '../dimensions'

const AdjacentLinesArrow = ({ start, selected, correct, incorrect, onClick, onDelete, annotation }) => {
  const x = CODE_FRAGMENT_PADDING_HORIZONTAL + LINE_WIDTH / 2 - ADJACENT_LINES_ARROW_SVG_WIDTH
  const y = CODE_FRAGMENT_PADDING_VERTICAL + (start + 1) * LINE_HEIGHT - ADJACENT_LINES_ARROW_SVG_HEIGHT / 2

  const className = classnames('AdjacentLinesArrow', { correct, incorrect })
  const style = { left: x + 'px', top: y + 'px' }

  return (
    <div className={className} style={style}>
      {selected && !correct && !incorrect && (
        <div className="delete-btn" onClick={onDelete}>x</div>
      )}
      <div className="arrowhead" onClick={onClick} />
      <div className="line" onClick={onClick} />
      <div className="annotation">{annotation}</div>
    </div>
  )
}

AdjacentLinesArrow.defaultProps = {
  selected: false,
  correct: false,
  incorrect: false
}

AdjacentLinesArrow.propTypes = {
  /** The line number this arrow starts from **/
  start: PropTypes.number.isRequired,

  /** Determines whether the arrow is selected. **/
  selected: PropTypes.bool,

  /** Determines whether the arrow is correct. **/
  correct: PropTypes.bool,

  /** Determines whether the arrow is incorrect. **/
  incorrect: PropTypes.bool,

  /** Called with the arrow ID when the arrow is clicked. **/
  onClick: PropTypes.func,

  /** Called with the arrow ID when the delete button is clicked **/
  onDelete: PropTypes.func,

  /** Render some text next to the arrow **/
  annotation: PropTypes.node
}

export default AdjacentLinesArrow
