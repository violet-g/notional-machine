import React from 'react'
import CodeLine from './CodeLine'

function getLines(codeFragment) {
  let lines = codeFragment.split(/\n/)
  return lines
}

const CodeFragment = ({ codeFragment, onFirstToken, onLastToken, expressions }) => {
  let lines = getLines(codeFragment)
  let lineComponents = []
  for (let i=0; i<lines.length; i++) {
    const idx = i
    let lineIndent = 0
    if (lines[i].match(/^\s+/) != null)
      lineIndent = lines[i].match(/^\s+/)[0].length
    let cutLine = lines[i].replace(/^\s+/, "")
    lineComponents.push(
      <CodeLine
        key={i}
        indent={lineIndent}
        line={cutLine}
        onFirstToken={(tokenIdx)=>onFirstToken(idx, tokenIdx)}
        onLastToken={(tokenIdx)=>onLastToken(idx, tokenIdx)}
        lineExpressions={expressions.filter((expression) =>
          expression.startLineIdx === i || expression.endLineIdx === i)}
      />
    )
  }
  return <div>{lineComponents}</div>
}

export default CodeFragment
