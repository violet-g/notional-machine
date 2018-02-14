import React from 'react'
import Indent from './Indent'
import classnames from 'classnames'

const Line = ({ indent, children, onClick, highlightable, highlighted }) => {
  const className = classnames('Line list-group-item', {
    active: highlighted,
    'list-group-item-action': highlightable
  })
  return (
    <div className={className} onClick={onClick}>
      <Indent size={indent} />{children}
    </div>
  )
}

export default Line
