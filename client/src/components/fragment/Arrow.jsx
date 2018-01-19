import React from 'react'
import ReactDom from 'react-dom'

function getLineElement (lineIdx) {
  return document.querySelector('.Line:nth-child(' + (lineIdx + 1) + ')')
}

// an arrow that connects adjacent lines
const AdjacentLinesArrow = ({ startLineElement, endLineElement }) => {
  const startRect = startLineElement.getBoundingClientRect()
  const endRect = endLineElement.getBoundingClientRect()

  const firstIndentRect = startLineElement.firstChild.getBoundingClientRect()
  const lastIndentRect = endLineElement.firstChild.getBoundingClientRect()

  const x = Math.max(firstIndentRect.x + firstIndentRect.width, lastIndentRect.x + lastIndentRect.width)

  const d =
    'M ' +
    (x + 20) + ' ' + (startRect.y + startRect.height) + ' ' +
    'L ' +
    (x + 20) + ' ' + (endRect.y)

  return (
    <div className="Arrow">
      <svg>
        <path d={d} fill="none" stroke="green" />
      </svg>
    </div>
  )
}

// an arrow that connects two lines which are not adjacent
const ForwardSkipArrow = ({ startLineElement, endLineElement }) => {
  const startRect = startLineElement.lastChild.getBoundingClientRect()
  const endRect = endLineElement.lastChild.getBoundingClientRect()
  const heightDiff = Math.abs(startRect.y - endRect.y)
  const maxX = Math.max(startRect.x, endRect.x)

  const d =
     'M ' +
     (startRect.x + startRect.width) + ' ' + (startRect.y + startRect.height / 2) + ' ' +
     'C ' +
     (maxX + 100) + ' ' + (startRect.y + heightDiff * 0.1) + ' ' +
     (maxX + 100) + ' ' + (startRect.y + heightDiff * 0.9) + ' ' +
     (endRect.x + endRect.width) + ' ' + (endRect.y + endRect.height / 2)

  return (
    <div className="Arrow">
      <svg>
        <path d={d} fill="none" stroke="green" />
      </svg>
    </div>
  )
}

// an arrow that goes backwards
const BackwardSkipArrow = ({ startLineElement, endLineElement }) => {
  const startRect = startLineElement.querySelector('.Token').getBoundingClientRect()
  const endRect = endLineElement.querySelector('.Token').getBoundingClientRect()
  const heightDiff = Math.abs(startRect.y - endRect.y)
  const minX = Math.min(startRect.x, endRect.x)

  const d =
     'M ' +
     (startRect.x) + ' ' + (startRect.y + startRect.height / 2) + ' ' +
     'C ' +
     (minX - 100) + ' ' + (startRect.y - heightDiff * 0.1) + ' ' +
     (minX - 100) + ' ' + (startRect.y - heightDiff * 0.9) + ' ' +
     (endRect.x) + ' ' + (endRect.y + endRect.height / 2)

  return (
    <div className="Arrow">
      <svg>
        <path d={d} fill="none" stroke="green" />
      </svg>
    </div>
  )
}

const Arrow = ({ startLine, endLine }) => {
  const startLineElement = getLineElement(startLine)
  const endLineElement = getLineElement(endLine)
  if (!startLineElement || !endLineElement) {
    return null
  }

  if (endLine === startLine + 1) {
    return (<AdjacentLinesArrow startLineElement={startLineElement} endLineElement={endLineElement} />)
  }
  if (endLine > startLine) {
    return (<ForwardSkipArrow startLineElement={startLineElement} endLineElement={endLineElement} />)
  }
  return (<BackwardSkipArrow startLineElement={startLineElement} endLineElement={endLineElement} />)
}

export default Arrow
