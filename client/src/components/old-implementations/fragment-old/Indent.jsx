import React from 'react'

const PX_PER_INDENT = 30

const Indent = ({ size }) => {
  const totalPadding = size * PX_PER_INDENT
  return (<span className="Indent" style={{ paddingRight: totalPadding + 'px' }}></span>)
}

export default Indent
