import React from 'react'
import Indent from './Indent'
import classnames from 'classnames'

const Line = ({ indent, children, onClick, highlightable, highlighted }) => (
  <div className={classnames("Line", { highlightable, highlighted })}>
    <Indent size={indent} /><span className="inner" onClick={onClick}>{children}</span>
  </div>
)

export default Line
