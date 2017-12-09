import React from 'react'
import CodeToken from './CodeToken'
import LineIndent from './LineIndent'

const CodeLine = ({ indent, line, onFirstToken, onLastToken, lineExpressions }) => {
  let tokens = line.split(" ")
  let tokenComponents = []
  for (let i=0; i<tokens.length; i++) {
    const idx = i
    tokenComponents.push(
      <CodeToken
        key={i}
        token={tokens[i]}
        onMouseDown={()=>onFirstToken(idx)}
        onMouseUp={()=>onLastToken(idx)}
        highlighted={!!lineExpressions.find((expression) =>
          i >= expression.startTokenIdx && i <= expression.endTokenIdx
        )}
        isStart={!!lineExpressions.find(expression => i === expression.startTokenIdx)}
        isEnd={!!lineExpressions.find(expression => i === expression.endTokenIdx)}
      />
    )
  }
  return (
    <div>
      <LineIndent indent={indent} />
      {tokenComponents}
    </div>
  )
}

export default CodeLine
