import React from 'react'
import classnames from 'classnames'
import Indent from './Indent'
import Token from './Token'

const Line = ({ line, highlightable, onClick }) => (
  <div className={classnames("Line", { highlightable })} onClick={() => highlightable && onClick()}>
    <Indent size={line.indent} />
    {line.tokens.map((token, i) => <Token highlightable={true} highlighted={true} key={i} token={token} />)}
  </div>
)

Line.defaultProps = {
  highlightable: false,
  onClick: () => ({})
}

export default Line
