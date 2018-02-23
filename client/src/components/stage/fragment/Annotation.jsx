import React from 'react'
import {
  CODE_FRAGMENT_WIDTH,
  CODE_FRAGMENT_PADDING_VERTICAL,
  CODE_FRAGMENT_PADDING_HORIZONTAL,
  LINE_WIDTH,
  LINE_HEIGHT,
  ADJACENT_LINES_ARROW_SVG_WIDTH,
  ADJACENT_LINES_ARROW_SVG_HEIGHT,
  FLOW_WIDTH
} from './dimensions'
import { getLineY } from './util'

const Annotation = ({ flow, onClick }) => {
  const { startLine, endLine } = flow.props
  let style = {}
  if (startLine === endLine - 1) {
    const x = CODE_FRAGMENT_PADDING_HORIZONTAL + LINE_WIDTH / 2
    const y = CODE_FRAGMENT_PADDING_VERTICAL + (startLine + 1) * LINE_HEIGHT - ADJACENT_LINES_ARROW_SVG_HEIGHT / 2
    style = { left: x, top: y }
  } else if (startLine < endLine) {
    const x = CODE_FRAGMENT_PADDING_HORIZONTAL + LINE_WIDTH - FLOW_WIDTH
    const y = getLineY(startLine) + 20
    style = { left: x, top: y }
  } else if (startLine > endLine) {
    const x = CODE_FRAGMENT_PADDING_HORIZONTAL
    const y = getLineY(endLine) + 20
    style = { left: x, top: y }
  }

  return (
    <div className="Annotation card card-body" style={style}>
      <div className="btn-group">
        <button type="button" className="btn btn-default" onClick={() => onClick('T')}>T</button>
        <button type="button" className="btn btn-default" onClick={() => onClick('F')}>F</button>
      </div>
    </div>
  )
}

export default Annotation
