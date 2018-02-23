import React from 'react'
import Arrowhead from './Arrowhead'
import CurvedPath from './CurvedPath'
import DeleteArrowButton from './DeleteArrowButton'

const CurvedArrow = ({ arrowhead, annotation, deleteButton, coordinates, stroke, onClick }) => {
  const { x1, y1, x2, y2, cx1, cy1, cx2, cy2 } = coordinates
  const children = []
  if (arrowhead) {
    children.push(React.cloneElement(arrowhead, Object.assign({ key: 'arrowhead' }, arrowhead.props)))
  }
  if (annotation) {
    children.push(React.cloneElement(annotation, Object.assign({ key: 'annotation' }, annotation.props)))
  }
  children.push(<CurvedPath key="path" stroke={stroke} onClick={onClick} x1={x1} y1={y1} x2={x2} y2={y2} cx1={cx1} cy1={cy1} cx2={cx2} cy2={cy2} />)
  if (deleteButton) {
    children.push(React.cloneElement(deleteButton, Object.assign({ key: 'del' }, deleteButton.props)))
  }
  return children
}

export default CurvedArrow
