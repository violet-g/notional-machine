import React from 'react'

const Arrowhead = ({ x, y }) => {
  const ARROWHEAD_SIZE = 4
  const d =
    'M ' + (x) + ' ' + (y) + ' ' +
    'L ' + (x - ARROWHEAD_SIZE) + ' ' + (y) + ' ' +
    'L ' + (x) + ' ' + (y + Math.sqrt(3) * ARROWHEAD_SIZE) + ' ' +
    'L ' + (x + ARROWHEAD_SIZE) + ' ' + (y) + ' ' +
    'Z'
  return (<path d={d} fill="#3d3d3d" stroke="#3d3d3d" />)
}

export default Arrowhead
