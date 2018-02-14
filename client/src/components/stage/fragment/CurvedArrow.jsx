import React from 'react'
import Arrowhead from './Arrowhead'
import CurvedPath from './CurvedPath'
import DeleteArrowButton from './DeleteArrowButton'

const CurvedArrow = ({ dx, dy, ax, ay, x1, y1, x2, y2, cx1, cy1, cx2, cy2, deg, onClick, deletable, onDelete }) => {
  const children = [
    (<Arrowhead key="arrowhead" x={ax} y={ay} deg={deg} />),
    (<CurvedPath key="path" onClick={onClick} x1={x1} y1={y1} x2={x2} y2={y2} cx1={cx1} cy1={cy1} cx2={cx2} cy2={cy2} />)
  ]
  if (deletable) {
    children.push(<DeleteArrowButton key="del" x={dx} y={dy} onDelete={onDelete}  />)
  }
  return children
}

export default CurvedArrow
