import React from 'react'
import Indent from './Indent'
import Token from './Token'

const Line = ({ line }) => (
  <div className="Line">
    <Indent size={line.indent} />
    {line.tokens.map((token, i) => <Token key={i} token={token} />)}
  </div>
)

export default Line
