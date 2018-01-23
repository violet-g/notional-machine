import React from 'react'
import CurvedPath from './CurvedPath'
import Arrowhead from './Arrowhead'

const Flow = ({ startLine, endLine, nodes }) => {
  // TODO figure out how to rotate Arrowhead
  // TODO there would be just a single code fragment per screen, remove .Task2 from querySelectors
  const getRect = idx => document.querySelector(`.Task2 .Line:nth-child(${idx + 1})`).getBoundingClientRect()

  const containerRect = document.querySelector(`.Task2 .CodeFragment`).getBoundingClientRect()
  const startLineElement = document.querySelector(`.Task2 .Line:nth-child(${startLine + 1})`)
  const endLineElement = document.querySelector(`.Task2 .Line:nth-child(${endLine + 1})`)
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

    d =
      'M ' +
      (x + 20) + ' ' + (startRect.y + startRect.height) + ' ' +
      'L ' +
      (x + 20) + ' ' + (endRect.y + 40)

  } else if (endLine > startLine) {
    const x1 = startX + startRect.width
    const y1 = startY + startRect.height / 2
    const x2 = endX + endRect.width
    const y2 = endY + endRect.height / 2
    const cx1 = maxX + 50
    const cy1 = startY + heightDiff * 0.25
    const cx2 = cx1
    const cy2 = startY + heightDiff * 0.75

    return (
      <div className="Flow">
        <svg>
          <CurvedPath x1={x1} y1={y1} x2={x2} y2={y2} cx1={cx1} cy1={cy1} cx2={cx2} cy2={cy2} />
          <Arrowhead x={x2} y={y2} />
        </svg>
      </div>
    )
  } else {
    const x1 = startX
    const y1 = startY + startRect.height / 2
    const x2 = endX
    const y2 = endY + endRect.height / 2
    const cx1 = minX - 50
    const cy1 = endY + heightDiff * 0.75
    const cx2 = cx1
    const cy2 = endY + heightDiff * 0.25

    return (
      <div className="Flow">
        <svg>
          <CurvedPath x1={x1} y1={y1} x2={x2} y2={y2} cx1={cx1} cy1={cy1} cx2={cx2} cy2={cy2} />
          <Arrowhead x={x2} y={y2} />
        </svg>
      </div>
    )
  }

  return (
    <div className="Flow">
      <svg>
        <path d={d} fill="none" stroke="#3d3d3d" />
      </svg>
    </div>
  )
}

export default Flow
