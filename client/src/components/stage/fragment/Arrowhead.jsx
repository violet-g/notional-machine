import React from 'react'

const Arrowhead = ({ x, y, deg }) => {
  const ARROWHEAD_SIZE = 4
  const d =
    'M ' + (x) + ' ' + (y) + ' ' +
    'L ' + (x - ARROWHEAD_SIZE) + ' ' + (y) + ' ' +
    'L ' + (x) + ' ' + (y + Math.sqrt(3) * ARROWHEAD_SIZE) + ' ' +
    'L ' + (x + ARROWHEAD_SIZE) + ' ' + (y) + ' ' +
    'Z'
  return (<g transform={`rotate(${deg} ${x} ${y})`}><path d={d} fill="#3d3d3d" stroke="#3d3d3d" /></g>)
}

Arrowhead.defaultProps = {
  deg: 0
}

export default Arrowhead
