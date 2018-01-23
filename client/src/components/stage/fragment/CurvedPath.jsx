import React from 'react'

const CurvedPath = ({ x1, y1, x2, y2, cx1, cx2, cy1, cy2 }) => {
  const d =
    'M ' + (x1) + ' ' + (y1) + ' ' +
    'C ' + (cx1) + ' ' + (cy1) + ' ' + (cx2) + ' ' + (cy2) + ' ' + (x2) + ' ' + (y2)
  return (<path d={d} fill="none" stroke="#3d3d3d" />)
}

export default CurvedPath
