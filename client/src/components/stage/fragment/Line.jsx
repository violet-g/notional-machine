import React from 'react'
import Indent from './Indent'
import classnames from 'classnames'

const Line = ({ indent, children, onClick, highlightable }) => (
  <span className={classnames("Line", { highlightable })} onClick={onClick}>
    <Indent size={indent} />{children}<br />
  </span>
)

export default Line
