import React from 'react'

const Text = ({ x, y, fill, children }) => (
  <text key="text" x={x} y={y} textAnchor="middle" fill={fill} dy=".3em">{children}</text>
)

export default Text
