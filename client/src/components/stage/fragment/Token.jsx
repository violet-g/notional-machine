import React from 'react'
import classnames from 'classnames'

const Token = ({ content, highlighted, onMouseOver, onClick }) => (
  <span
    className={classnames('Token', { highlighted })}
    onClick={onClick}
    onMouseOver={onMouseOver}>
    {content}
  </span>
)

export default Token
