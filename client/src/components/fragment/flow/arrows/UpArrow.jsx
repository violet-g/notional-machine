import React from 'react'
import PropTypes from 'prop-types'
import CurvedArrow from './CurvedArrow'
import { CODE_FRAGMENT_PADDING_HORIZONTAL, getLineY, getFlowColor } from '../dimensions'
import Text from './Text'
import Arrowhead from './Arrowhead'
import DeleteArrowButton from './DeleteArrowButton'

const UpArrow = ({ start, end, selected, correct, incorrect, missed, onClick, onDelete, annotation }) => {
  const x1 = CODE_FRAGMENT_PADDING_HORIZONTAL
  const y1 = getLineY(start)
  const x2 = CODE_FRAGMENT_PADDING_HORIZONTAL - 4
  const y2 = getLineY(end)
  const cx1 = 0
  const cy1 = y1
  const cx2 = 0
  const cy2 = y2
  const ax = x2 - 4
  const ay = y2
  const dx = x1 - 6
  const dy = y1

  const arrowhead = (<Arrowhead x={ax} y={ay} deg={270} fill="#3d3d3d" />)
  const annotationComponent = (<Text x={x2 - 20} y={y2 - 10} fill="#3d3d3d">{annotation || ''}</Text>)
  let deleteButton = null
  if (selected && !correct && !incorrect) {
    deleteButton = (<DeleteArrowButton x={dx} y={dy} onDelete={onDelete} />)
  }

  return (
    <CurvedArrow
      onClick={onClick}
      stroke={getFlowColor(correct, incorrect || missed)}
      strokeDasharray={missed ? '5, 5' : '0, 0'}
      annotation={annotationComponent}
      arrowhead={arrowhead}
      deleteButton={deleteButton}
      coordinates={{ x1, y1, x2, y2, cx1, cy1, cx2, cy2 }}
    />
  )
}

UpArrow.propTypes = {
  /** Arrow starting line **/
  start: PropTypes.number.isRequired,

  /** Arrow end line **/
  end: PropTypes.number.isRequired,

  /** Whether the arrow is selected **/
  selected: PropTypes.bool,

  /** Whether the arrow is correct **/
  correct: PropTypes.bool,

  /** Whether the arrow is incorrect **/
  incorrect: PropTypes.bool,

  /**
   * Determines whether this arrow is marked as missed. Missed arrows are
   * arrows which were in the model solution but the pupil failed to highlight.
   */
  missed: PropTypes.bool,

  /** Called when the arrow is clicked **/
  onClick: PropTypes.func,

  /** Called when the delete button is clicked **/
  onDelete: PropTypes.func,

  /** Annotation to render next to the arrow **/
  annotation: PropTypes.node
}

export default UpArrow
