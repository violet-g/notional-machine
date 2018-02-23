import React from 'react'
import AdjacentLinesArrow from './arrows/AdjacentLinesArrow'
import UpArrow from './arrows/UpArrow'
import DownArrow from './arrows/DownArrow'

const Flow = (props) => {
  const { startLine, endLine } = props

  if (startLine === endLine - 1) {
    return (<AdjacentLinesArrow {...props} />)
  }
  if (startLine > endLine) {
    return (<UpArrow {...props} />)
  }
  if (startLine < endLine) {
    return (<DownArrow {...props} />)
  }
}

Flow.defaultProps = {
  incorrect: false,
  correct: false
}

export default Flow
