import React from 'react'

const CurvedPath = ({ x1, y1, x2, y2, cx1, cx2, cy1, cy2, onClick, stroke }) => {
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
      strokeWidth="2"
    />
  )
}

export default CurvedPath
