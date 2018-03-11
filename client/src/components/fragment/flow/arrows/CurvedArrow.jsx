import React from 'react'
import PropTypes from 'prop-types'
import Arrowhead from './Arrowhead'
import CurvedPath from './CurvedPath'
import DeleteArrowButton from './DeleteArrowButton'
import { FLOW_COLOR_DEFAULT } from '../dimensions'

const CurvedArrow = ({ arrowhead, annotation, deleteButton, coordinates, stroke, strokeDasharray, onClick }) => {
  return (
    <React.Fragment>
      {arrowhead}
      {annotation}
      <CurvedPath stroke={stroke} strokeDasharray={strokeDasharray} onClick={onClick} coordinates={coordinates} />
      {deleteButton}
    </React.Fragment>
  )
}

CurvedArrow.defaultProps = {
  stroke: FLOW_COLOR_DEFAULT,
  strokeDasharray: '0, 0'
}

CurvedArrow.propTypes = {
  /** An Arrowhead component. **/
  arrowhead: PropTypes.element.isRequired,

  /** An Annotation that will be displayed next to the arrow **/
  annotation: PropTypes.element,

  /** A DeleteArrowButton component to attach to the arrow **/
  deleteButton: PropTypes.element,

  /** Coordinates for the arrow **/
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

  /** The arrow stroke **/
  stroke: PropTypes.string,

  /** Controls whether this is a curved path or not **/
  strokeDasharray: PropTypes.string,

  /** Called when the arrow is clicked **/
  onClick: PropTypes.func
}

export default CurvedArrow
