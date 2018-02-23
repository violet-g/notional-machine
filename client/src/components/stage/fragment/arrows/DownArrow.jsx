import React from 'react'
import CurvedArrow from './CurvedArrow'
import { getLineY, getFlowColor } from './util'
import { CODE_FRAGMENT_PADDING_HORIZONTAL, LINE_WIDTH, CODE_FRAGMENT_WIDTH } from '../dimensions'

const DownArrow = ({ startLine, endLine, selected, correct, incorrect, onClick, onDelete }) => {
  const x1 = CODE_FRAGMENT_PADDING_HORIZONTAL + LINE_WIDTH
  const y1 = getLineY(startLine)
  const x2 = CODE_FRAGMENT_PADDING_HORIZONTAL + LINE_WIDTH + 6
  const y2 = getLineY(endLine)
  const cx1 = CODE_FRAGMENT_WIDTH
  const cy1 = y1
  const cx2 = CODE_FRAGMENT_WIDTH
  const cy2 = y2
  const ax = x1 + 8
  const ay = y2
  const dx = x1 + 6
  const dy = y1
  return (
    <CurvedArrow
      onClick={onClick}
      deletable={selected && !correct && !incorrect}
      onDelete={onDelete}
      stroke={getFlowColor(correct, incorrect)}
      dx={dx}
      dy={dy}
      deg={90}
      ax={ax}
      ay={ay}
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      cx1={cx1}
      cy1={cy1}
      cx2={cx2}
      cy2={cy2}
    />
  )
}

export default DownArrow
