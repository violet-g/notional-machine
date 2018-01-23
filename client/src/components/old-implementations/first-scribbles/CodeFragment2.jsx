import React from 'react'
import CodeLine from './CodeLine'

const CodeFragment2 = ({ codeFragment, flows, mode, onLineSelect }) => {

  let lines = codeFragment.split(/\n/)
  let allLines = []

  // loop through lines
  for (let i=0; i<lines.length; i++) {
    let lIdx = i

    // save indentation for printing and clean line
    let lineIndent = 0
    if (lines[i].match(/^\s+/) != null)
      lineIndent = lines[i].match(/^\s+/)[0].length
    let line = lines[i].replace(/^\s+/, "")

    // add the whole line with the correct indent
    let indent = 10*lineIndent
    allLines.push(
      <div key={'l_' + i} className="LineIndent">
        <CodeLine
          key={'line' + i}
          line={line}
          onClick={() => onLineSelect(lIdx)}
          arrow={i === 1 ? <div className="SkipDownArrow">
          <div className="startLine" />
          <div className="endLine" /></div> : null}
          style={{ paddingLeft: indent+"px" }}
        />
      {/* <br/> */}
    </div>
    )
  }
  return <div>{allLines}</div>
}

export default CodeFragment2
