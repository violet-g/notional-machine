import React from 'react'
import PropTypes from 'prop-types'
import { FLOW_COLOR_INCORRECT } from '../dimensions'

const DeleteArrowButton = ({ x, y, onDelete }) => (
  <React.Fragment>
    <circle className="delete-btn" cx={x} cy={y} r="5" fill={FLOW_COLOR_INCORRECT} onClick={onDelete} />
    <text className="delete-btn" onClick={onDelete} x={x} y={y} textAnchor="middle" fill="white" dy=".3em">x</text>
  </React.Fragment>
)

DeleteArrowButton.propTypes = {
  /* X coordinate relative to the code fragment **/
  x: PropTypes.number.isRequired,

  /* Y coordinate relative to the code fragment **/
  y: PropTypes.number.isRequired,

  /* Called when the button is clicked **/
  onDelete: PropTypes.func
}

export default DeleteArrowButton
