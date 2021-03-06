import React from 'react'
import PropTypes from 'prop-types'
import { FLOW_COLOR_DEFAULT } from '../dimensions'

/** Represents the curve used to create an arrow **/
const CurvedPath = ({ coordinates, onClick, stroke, strokeDasharray }) => {
  const { x1, y1, x2, y2, cx1, cx2, cy1, cy2 } = coordinates
  const d =
    'M ' + (x1) + ' ' + (y1) + ' ' +
    'C ' + (cx1) + ' ' + (cy1) + ' ' + (cx2) + ' ' + (cy2) + ' ' + (x2) + ' ' + (y2)
  return (
    <path
      className="CurvedPath"
      d={d}
      onClick={onClick}
      fill="none"
      stroke={stroke}
      strokeDasharray={strokeDasharray}
      strokeWidth="2"
    />
  )
}

CurvedPath.defaultProps = {
  stroke: FLOW_COLOR_DEFAULT,
  strokeDasharray: '0, 0'
}

CurvedPath.propTypes = {
  /** Coordinates for the path **/
  coordinates: PropTypes.shape({
    x1: PropTypes.number.isRequired,
    y1: PropTypes.number.isRequired,
    x2: PropTypes.number.isRequired,
    y2: PropTypes.number.isRequired,
    cx1: PropTypes.number.isRequired,
    cy1: PropTypes.number.isRequired,
    cx2: PropTypes.number.isRequired,
    cy2: PropTypes.number.isRequired
  }).isRequired,

  /** The path stroke **/
  stroke: PropTypes.string,

  /** Controls whether this is a curved path or not **/
  strokeDasharray: PropTypes.string,

  /** Called when the path is clicked **/
  onClick: PropTypes.func
}

export default CurvedPath
