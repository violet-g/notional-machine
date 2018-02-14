import React from 'react'

const DeleteArrowButton = ({ x, y, onDelete }) => {
  return [
    <circle
      className="delete-btn"
      key="circle"
      cx={x} cy={y} r="5"
      fill="red"
      onClick={onDelete}
    />,
    <text key="text" className="delete-btn" onClick={onDelete} x={x} y={y} textAnchor="middle" fill="white" dy=".3em">x</text>
  ]
}

export default DeleteArrowButton
