import React from 'react'
import PropTypes from 'prop-types'
import { ARROWHEAD_SIZE, FLOW_COLOR_DEFAULT } from '../dimensions'

/** Represents the pointer at the end of an arrow **/
const Arrowhead = ({ x, y, deg, fill }) => {
  const d =
    'M ' + (x) + ' ' + (y) + ' ' +
    'L ' + (x - ARROWHEAD_SIZE) + ' ' + (y) + ' ' +
    'L ' + (x) + ' ' + (y + Math.sqrt(3) * ARROWHEAD_SIZE) + ' ' +
    'L ' + (x + ARROWHEAD_SIZE) + ' ' + (y) + ' ' +
    'Z'
  return (<g transform={`rotate(${deg} ${x} ${y})`}><path d={d} fill={fill} stroke="none" /></g>)
}

Arrowhead.defaultProps = {
  deg: 0,
  fill: FLOW_COLOR_DEFAULT
}

Arrowhead.propTypes = {
  /** X coordinate of arrowhead (relative to code fragment). **/
  x: PropTypes.number.isRequired,

  /** Y coordinate of arrowhead (relative to code fragment). **/
  y: PropTypes.number.isRequired,

  /** Degrees of rotation. Defaults to 0. **/
  deg: PropTypes.number,

  /** Fill color of the arrowhead **/
  fill: PropTypes.string
}

export default Arrowhead
