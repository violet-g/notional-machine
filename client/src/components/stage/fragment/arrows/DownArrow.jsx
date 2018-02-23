import React from 'react'
import CurvedArrow from './CurvedArrow'
import { getLineY, getFlowColor } from '../util'
import { CODE_FRAGMENT_PADDING_HORIZONTAL, LINE_WIDTH, CODE_FRAGMENT_WIDTH } from '../dimensions'
import Text from './Text'
import Arrowhead from './Arrowhead'
import DeleteArrowButton from './DeleteArrowButton'

const DownArrow = ({ startLine, endLine, selected, correct, incorrect, onClick, onDelete, annotation }) => {
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

  const arrowhead = (<Arrowhead x={ax} y={ay} deg={90} fill="#3d3d3d" />)
  const annotationComponent = (<Text x={x1 + 20} y={y1 - 10} fill="#3d3d3d">{annotation || ''}</Text>)
  let deleteButton = null
  if (selected && !correct && !incorrect) {
    deleteButton = (<DeleteArrowButton x={dx} y={dy} onDelete={onDelete} />)
  }

  return (
    <CurvedArrow
      onClick={onClick}
      stroke={getFlowColor(correct, incorrect)}
      annotation={annotationComponent}
      arrowhead={arrowhead}
      deleteButton={deleteButton}
      coordinates={{ x1, y1, x2, y2, cx1, cy1, cx2, cy2 }}
    />
  )
}

export default DownArrow
