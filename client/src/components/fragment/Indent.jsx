import React from 'react'

const PX_PER_INDENT = 10

const Indent = ({ size }) => {
  const totalPadding = size * PX_PER_INDENT
  return (<span style={{ paddingRight: totalPadding + 'px' }}></span>)
}

export default Indent
