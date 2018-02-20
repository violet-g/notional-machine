import React from 'react'

// TODO duplicate code with Flow component, extract in a separate file
const CODE_FRAGMENT_WIDTH = 400
const CODE_FRAGMENT_PADDING_TOP_PX = 40
const CODE_FRAGMENT_PADDING_LEFT_PX = 80
const LINE_WIDTH_PX = 198 + 40 + 2
const LINE_HEIGHT_PX = 23.2 + 24 + 2
const DIRECT_ARROW_SVG_WIDTH = 20
const DIRECT_ARROW_SVG_HEIGHT = 30
const FLOW_WIDTH = 100

function getLineY (lineIdx) {
  return CODE_FRAGMENT_PADDING_TOP_PX + lineIdx * LINE_HEIGHT_PX + LINE_HEIGHT_PX / 2
}

const Annotation = ({ flow }) => {
  const { startLine, endLine } = flow.props
  let style = {}
  if (startLine === endLine - 1) {
    const x = CODE_FRAGMENT_PADDING_LEFT_PX + LINE_WIDTH_PX / 2
    const y = CODE_FRAGMENT_PADDING_TOP_PX + (startLine + 1) * LINE_HEIGHT_PX - DIRECT_ARROW_SVG_HEIGHT / 2
    style = { left: x, top: y }
  } else if (startLine < endLine) {
    const x = CODE_FRAGMENT_PADDING_LEFT_PX + LINE_WIDTH_PX - FLOW_WIDTH
    const y = getLineY(startLine) + 20
    style = { left: x, top: y }
  } else if (startLine > endLine) {
    const x = CODE_FRAGMENT_PADDING_LEFT_PX
    const y = getLineY(endLine) + 20
    style = { left: x, top: y }
  }

  return (
    <div className="Annotation card card-body" style={style}>
      <input type="text" placeholder="T/F" className="form-control" />
    </div>
  )
}

export default Annotation
