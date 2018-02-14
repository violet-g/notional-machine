import React from 'react'
import CurvedArrow from './CurvedArrow'
import Arrowhead from './Arrowhead'
import DeleteArrowButton from './DeleteArrowButton'

const CODE_FRAGMENT_WIDTH = 400
const CODE_FRAGMENT_PADDING_TOP_PX = 40
const CODE_FRAGMENT_PADDING_LEFT_PX = 80
const LINE_WIDTH_PX = 198 + 40 + 2
const LINE_HEIGHT_PX = 23.2 + 24 + 2
const DIRECT_ARROW_SVG_WIDTH = 20
const DIRECT_ARROW_SVG_HEIGHT = 30

function getLineY (lineIdx) {
  return CODE_FRAGMENT_PADDING_TOP_PX + lineIdx * LINE_HEIGHT_PX + LINE_HEIGHT_PX / 2
}

const Flow = ({ startLine, endLine, onClick, onDelete, selected }) => {
  if (startLine === endLine - 1) {
    const x = CODE_FRAGMENT_PADDING_LEFT_PX + LINE_WIDTH_PX / 2 - DIRECT_ARROW_SVG_WIDTH
    const y = CODE_FRAGMENT_PADDING_TOP_PX + (startLine + 1) * LINE_HEIGHT_PX - DIRECT_ARROW_SVG_HEIGHT / 2
    return (
      <div className="Flow direct" onClick={onClick} style={{ left: x + 'px', top: y + 'px' }}>
        {selected && <div className="delete-btn" onClick={onDelete}>x</div>}
        <div className="arrowhead" />
        <div className="line" />
      </div>
    )
  }
  if (startLine < endLine) {
    const x1 = CODE_FRAGMENT_PADDING_LEFT_PX
    const y1 = getLineY(startLine)
    const x2 = CODE_FRAGMENT_PADDING_LEFT_PX - 4
    const y2 = getLineY(endLine)
    const cx1 = 0
    const cy1 = y1
    const cx2 = 0
    const cy2 = y2
    const ax = x2 - 4
    const ay = y2
    const dx = x1 - 6
    const dy = y1
    return (<CurvedArrow onClick={onClick} deletable={selected} onDelete={onDelete} dx={dx} dy={dy} deg={270} ax={ax} ay={ay} x1={x1} y1={y1} x2={x2} y2={y2} cx1={cx1} cy1={cy1} cx2={cx2} cy2={cy2} />)
  }
  if (startLine > endLine) {
    const x1 = CODE_FRAGMENT_PADDING_LEFT_PX + LINE_WIDTH_PX
    const y1 = getLineY(startLine)
    const x2 = CODE_FRAGMENT_PADDING_LEFT_PX + LINE_WIDTH_PX + 6
    const y2 = getLineY(endLine)
    const cx1 = CODE_FRAGMENT_WIDTH
    const cy1 = y1
    const cx2 = CODE_FRAGMENT_WIDTH
    const cy2 = y2
    const ax = x1 + 8
    const ay = y2
    const dx = x1 + 6
    const dy = y1
    return (<CurvedArrow onClick={onClick} deletable={selected} onDelete={onDelete} dx={dx} dy={dy} deg={90} ax={ax} ay={ay} x1={x1} y1={y1} x2={x2} y2={y2} cx1={cx1} cy1={cy1} cx2={cx2} cy2={cy2} />)
  }
}

export default Flow
