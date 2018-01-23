import React from 'react'
import Arrow from './Arrow'
import Line from './Line'

const CodeFragment = ({ fragment }) => (
  <div className="CodeFragment">
    {fragment.map((line, i) => <Line key={i} line={line} />)}
    <Arrow startLine={0} endLine={1} />
    <Arrow startLine={1} endLine={2} />
    <Arrow startLine={2} endLine={3} />
    <Arrow startLine={0} endLine={3} />
    <Arrow startLine={4} endLine={2} />
  </div>
)

export default CodeFragment
