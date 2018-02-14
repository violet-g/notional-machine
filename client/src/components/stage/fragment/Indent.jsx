import React from 'react'

const INDENT_SIZE_PX = 40

const Indent = ({ size }) => (
  <span className="Indent" style={{ paddingRight: (size * INDENT_SIZE_PX) + 'px' }} />
)

export default Indent
