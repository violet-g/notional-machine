import React from 'react'
import PropTypes from 'prop-types'
import AdjacentLinesArrow from './arrows/AdjacentLinesArrow'
import UpArrow from './arrows/UpArrow'
import DownArrow from './arrows/DownArrow'
import { getBoolValue, getNodeValue } from '../util'

const Flow = props => {
  const { id, annotation, start, end, selected, correct, incorrect, missed, onClick, onDelete } = props

  const arrowProps = Object.assign({}, props, {
    annotation: getNodeValue(annotation, id),
    selected: getBoolValue(selected, id),
    correct: getBoolValue(correct, id),
    incorrect: getBoolValue(incorrect, id),
    missed: getBoolValue(missed, id),
    onClick: () => onClick(id),
    onDelete: () => onDelete(id)
  })

  if (start === end - 1) {
    return (<AdjacentLinesArrow {...arrowProps} />)
  }
  if (start > end) {
    return (<UpArrow {...arrowProps} />)
  }
  if (start < end) {
    return (<DownArrow {...arrowProps} />)
  }
  return null
}

Flow.defaultProps = {
  incorrect: false,
  correct: false,
  selected: false,
  missed: false,
  onClick: () => ({}),
  onDelete: () => ({})
}

Flow.propTypes = {
  /** The unique ID of this flow **/
  id: PropTypes.number.isRequired,

  /** Flow starting line **/
  start: PropTypes.number.isRequired,

  /** Flow end line **/
  end: PropTypes.number.isRequired,

  /**
   * Determines whether the flow is selected.
   * Can be a function in which case it's called with the Flow ID and should return boolean.
   */
  selected: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),

  /**
   * Determines whether the flow is correct.
   * Can be a function in which case it's called with the Flow ID and should return boolean.
   */
  correct: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),

  /**
   * Determines whether this flow is marked as missed. Missed flows are
   * flows which were in the model solution but the pupil failed to highlight.
   * Can be a function in which case it's called with the Flow ID and should return boolean.
   */
  missed: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),

  /**
   * Determines whether the flow is incorrect.
   * Can be a function in which case it's called with the Flow ID and should return boolean.
   */
  incorrect: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),

  /** Called when the flow is clicked **/
  onClick: PropTypes.func,

  /** Called when the delete button is clicked **/
  onDelete: PropTypes.func,

  /**
   * Annotation to render next to the flow.
   * Could be a renderable node (e.g. string, integer, React component) or
   * a function which returns a renderable node.
   */
  annotation: PropTypes.oneOfType([PropTypes.node, PropTypes.func])
}

export default Flow
