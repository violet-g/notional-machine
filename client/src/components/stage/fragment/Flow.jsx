import React from 'react'
import CurvedPath from './CurvedPath'
import Arrowhead from './Arrowhead'
import DeleteArrowButton from './DeleteArrowButton'

const Flow = ({ startLine, endLine, onClick, onDelete, selected }) => {
  const getRect = idx => document.querySelector(`.Line:nth-child(${idx + 1})`).getBoundingClientRect()

  const containerRect = document.querySelector(`.CodeFragment`).getBoundingClientRect()
  const startLineElement = document.querySelector(`.Line:nth-child(${startLine + 1})`)
  const endLineElement = document.querySelector(`.Line:nth-child(${endLine + 1})`)
  const startLineIndentRect = document.querySelector(`.Line:nth-child(${startLine + 1})`).firstChild.getBoundingClientRect()
  const endLineIndentRect = document.querySelector(`.Line:nth-child(${endLine + 1})`).firstChild.getBoundingClientRect()
  const startRect = startLineElement.getBoundingClientRect()
  const endRect = endLineElement.getBoundingClientRect()
  const startX = startRect.x - containerRect.x
  const startY = startRect.y - containerRect.y
  const endX = endRect.x - containerRect.x
  const endY = endRect.y - containerRect.y
  const heightDiff = Math.abs(startY - endY)
  let maxX = 0
  let minX = Infinity
  for (let i = startLine; i <= endLine; i++) {
    const rect = getRect(i)
    maxX = Math.max(maxX, rect.x - containerRect.x + rect.width)
  }
  for (let i = endLine; i <= startLine; i++) {
    const rect = getRect(i)
    minX = Math.min(minX, rect.x - containerRect.x)
  }

  let d = ''

  if (endLine === startLine) {
    return null
  } else if (endLine === startLine + 1) {

    const firstIndentRect = startLineElement.firstChild.getBoundingClientRect()
    const lastIndentRect = endLineElement.firstChild.getBoundingClientRect()
    const x = Math.max(firstIndentRect.x + firstIndentRect.width, lastIndentRect.x + lastIndentRect.width)

    const x1 = x - containerRect.x + 20
    const y1 = startRect.y - containerRect.y + startRect.height - 8
    const x2 = x - containerRect.x + 20
    const y2 = endRect.y - containerRect.y

    d = 'M ' + x1 + ' ' + y1 + ' ' + 'L ' + x2 + ' ' + y2

    let del = []
    if (selected) {
      del = [<DeleteArrowButton className="DeleteArrowButton" key="del" onDelete={onDelete} x={x1} y={y1} />]
    }

    return [
      <path key="path" d={d} fill="none" stroke="#3d3d3d" strokeWidth="2" onClick={onClick} />,
      <Arrowhead key="arrowhead" x={x2} y={y2} />,
      ...del
    ]
  } else if (endLine > startLine) {
    const x1 = startX + startRect.width + 10
    const y1 = startY + startRect.height / 2
    const x2 = endX + endRect.width + 10
    const y2 = endY + endRect.height / 2
    const cx1 = maxX + 50
    const cy1 = y1
    const cx2 = cx1
    const cy2 = y2

    let del = []
    if (selected) {
      del = [<DeleteArrowButton className="DeleteArrowButton" key="del" onDelete={onDelete} x={x1} y={y1} />]
    }

    return [
      <CurvedPath key="path" x1={x1} y1={y1} x2={x2} y2={y2} cx1={cx1} cy1={cy1} cx2={cx2} cy2={cy2} onClick={onClick} />,
      <Arrowhead key="arrowhead" x={x2} y={y2} deg={90} />,
      ...del
    ]
  } else {
    const x1 = startX + startLineIndentRect.width - 10
    const y1 = startY + startRect.height / 2
    const x2 = endX + endLineIndentRect.width - 10
    const y2 = endY + endRect.height / 2
    const cx1 = minX - 50
    const cy1 = y1
    const cx2 = cx1
    const cy2 = y2

    let del = []
    if (selected) {
      del = [<DeleteArrowButton className="DeleteArrowButton" key="del" onDelete={onDelete} x={x1} y={y1} />]
    }

    return [
      <CurvedPath key="path" x1={x1} y1={y1} x2={x2} y2={y2} cx1={cx1} cy1={cy1} cx2={cx2} cy2={cy2} onClick={onClick} />,
      <Arrowhead key="arrowhead" x={x2} y={y2} deg={270} />,
      ...del
    ]
  }
}

export default Flow
