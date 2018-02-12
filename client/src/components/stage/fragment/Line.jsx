import React from 'react'
import Indent from './Indent'
import classnames from 'classnames'

const Line = ({ indent, children, onClick, highlightable, highlighted }) => (
  <div className={classnames("Line", { highlightable, highlighted })} onClick={onClick}>
    <span className="inner"><Indent size={indent} />{children}</span>
  </div>
)

export default Line
