import React from 'react'
import PropTypes from 'prop-types'
import { FLOW_COLOR_DEFAULT } from '../dimensions'

/** The text used in the annotation of an arrow **/
const Text = ({ x, y, fill, children }) => (
  <text key="text" x={x} y={y} textAnchor="middle" fill={fill} dy=".3em">{children}</text>
)

Text.defaultProps = {
  fill: FLOW_COLOR_DEFAULT
}

Text.propTypes = {
  /* X coordinate relative to the code fragment **/
  x: PropTypes.number.isRequired,

  /* Y coordinate relative to the code fragment **/
  y: PropTypes.number.isRequired,

  /** Text color **/
  fill: PropTypes.string
}

export default Text
