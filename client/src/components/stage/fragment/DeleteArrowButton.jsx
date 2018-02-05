import React from 'react'

const DeleteArrowButton = ({ x, y, onDelete }) => {
  return [
    <circle
      key="circle"
      cx={x} cy={y} r="5"
      stroke="black" strokeWidth="1" fill="red"
      onClick={onDelete}
    />,
    <text key="text" x={x} y={y} textAnchor="middle" fill="white" dy=".3em">x</text>
  ]
}

export default DeleteArrowButton
