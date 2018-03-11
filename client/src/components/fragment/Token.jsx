import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { getBoolValue } from './util'

const Token = ({ content, highlighted, onMouseOver, onClick, line, token }) => (
  <span
    className={classnames('Token', { highlighted: getBoolValue(highlighted, line, token) })}
    onClick={() => onClick(line, token)}
    onMouseOver={() => onMouseOver(line, token)}>
    {content}
  </span>
)

Token.defaultProps = {
  onClick: () => ({}),
  onMouseOver: () => ({}),
  highlighted: false
}

Token.propTypes = {
  /** Whatever is being rendered as a token. **/
  content: PropTypes.node.isRequired,

  /** Called whenever mouse enters the token. The line and token indices are passed as arguments. **/
  onMouseOver: PropTypes.func,

  /** Called whenever the token is clicked. The line and token indices are passed as arguments. **/
  onClick: PropTypes.func,

  /** The index of the line this token on **/
  line: PropTypes.number.isRequired,

  /** The index of the token on the line it's on **/
  token: PropTypes.number.isRequired
}

export default Token
