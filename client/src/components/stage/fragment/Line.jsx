import React from 'react'
import Indent from './Indent'
import classnames from 'classnames'

const Line = ({ indent, children, onClick, highlightable, highlighted }) => (
  <span className={classnames("Line", { highlightable, highlighted })} onClick={onClick}>
    <Indent size={indent} />{children}<br />
  </span>
)

export default Line
