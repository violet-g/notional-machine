import React from 'react'
import CodeToken from './CodeToken'
import DeleteExprButton from './DeleteExprButton'

const CodeFragment = ({ codeFragment, mode, currToken, expressions, onTokenSelect, onMouseOnToken, lastStartToken, onDelete }) => {

  let lines = codeFragment.split(/\n/)
  let allLines = []
  let allTokens = []
  let tokenIdx = 0

  // loop through lines
  for (let i=0; i<lines.length; i++) {

    // save indentation for printing and clean line
    let lineIndent = 0
    if (lines[i].match(/^\s+/) != null)
      lineIndent = lines[i].match(/^\s+/)[0].length
    let line = lines[i].replace(/^\s+/, "")

    // get tokens in line
    let tokens = line.split(" ")
    let tokensInLine = []

    // loop through tokens
    for (let j=0; j<tokens.length; j++) {

      const tIdx = tokenIdx
      allTokens.push(tokenIdx)

      let isHighlighted = mode &&
          ((currToken > lastStartToken && tIdx >= lastStartToken && tIdx<=currToken) ||
            (currToken < lastStartToken && tIdx <=lastStartToken && tIdx>=currToken))
      let isSelected = !!expressions.find((expression) =>
        tokenIdx >= expression.startTokenIdx && tokenIdx <= expression.endTokenIdx)
      let isStart = !!expressions.find(expression => tokenIdx === expression.startTokenIdx)
      let isEnd = !!expressions.find(expression => tokenIdx === expression.endTokenIdx)

      // add token
      tokensInLine.push(
        <CodeToken
          key={'tok_' + tokenIdx}
          token={tokens[j]}
          onClick={() => onTokenSelect(tIdx)}
          onMouseOnToken={() => onMouseOnToken(tIdx)}
          isHighlighted={isHighlighted}
          isSelected={isSelected}
          isStart={isStart}
          isEnd={isEnd}
          onDelete={() => onDelete(tIdx)}
        />
      )
      tokenIdx++
    }

    // and end of line
    tokensInLine.push(<br key={'br_' + i} />)

    // add the whole line with the correct indent
    let indent = 10*lineIndent
    allLines.push(
      <span key={'l_' + i} className="LineIndent" style={{ marginLeft: indent+"px" }}>
        {tokensInLine}
      </span>
    )
  }
  return <div>{allLines}</div>
}

export default CodeFragment
