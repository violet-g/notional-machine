import React from 'react'
import CodeToken from './CodeToken'

const CodeLine = ({ indent, line }) => {
  let tokens = line.split(" ")
  let tokenComponents = []
  let key = 0
  for (let token of tokens) {
    tokenComponents.push(<CodeToken key={key} token={token} />)
    key++
  }
  return <div>{tokenComponents}</div>
}

export default CodeLine
