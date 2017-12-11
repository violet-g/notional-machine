import React from 'react'
import CodeToken from './CodeToken'

const CodeFragment = ({ codeFragment, mode, expressions, onTokenSelect }) => {
  let lines = codeFragment.split(/\n/)
  let components = []
  let tokenIdx = 0

  for (let i=0; i<lines.length; i++) {

    // save indentation for printing
    let lineIndent = 0
    if (lines[i].match(/^\s+/) != null)
      lineIndent = lines[i].match(/^\s+/)[0].length

    let line = lines[i].replace(/^\s+/, "")
    let tokens = line.split(" ")
    let tokenComponents = []

    for (let j=0; j<tokens.length; j++) {
      const tId = tokenIdx
      tokenComponents.push(
        <CodeToken
          key={'tok_' + tokenIdx}
          token={tokens[j]}
          mode={mode}
          onClick={() => onTokenSelect(tId)}
          highlighted={!!expressions.find((expression) =>
            tokenIdx >= expression.startTokenIdx && tokenIdx <= expression.endTokenIdx)}
          isStart={!!expressions.find(expression => tokenIdx === expression.startTokenIdx)}
          isEnd={!!expressions.find(expression => tokenIdx === expression.endTokenIdx)}
        />
      )
      tokenIdx++
    }

    tokenComponents.push(<br key={'br_' + i} />)
    let indent = 10*lineIndent
    components.push(
      <span key={'line_' + i} className="LineIndent" style={{ marginLeft: indent+"px" }}>{tokenComponents}</span>
    )
  }
  return <div>{components}</div>
}

export default CodeFragment
