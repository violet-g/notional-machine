import React from 'react'
import classnames from 'classnames'

const Token = ({ token, highlightable, highlighted, onClick }) => (
  <span
    className={classnames('Token', { highlightable, highlighted })}
    onClick={() => highlightable && onClick()}>
    {token}
  </span>
)

Token.defaultProps = {
  highlightable: false,
  highlighted: false,
  onClick: () => ({})
}

export default Token
