import React from 'react'
import CodeLine from './CodeLine'

function getLines(codeFragment) {
  let lines = codeFragment.split(/\n/)
  return lines
}

const CodeFragment = ({ codeFragment }) => {
  let lines = getLines(codeFragment)
  let lineComponents = []
  let key = 0
  for (let line of lines) {
    let lineIndent = 0
    if (line.match(/^\s+/) != null)
      lineIndent = line.match(/^\s+/)[0].length
    let cutLine = line.replace(/^\s+/, "")
    lineComponents.push(<CodeLine key={key} indent={lineIndent} line={cutLine}/>)
    key++
  }
  return <div>{lineComponents}</div>
}

export default CodeFragment
