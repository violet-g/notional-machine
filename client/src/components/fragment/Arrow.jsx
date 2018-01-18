import React from 'react'
import ReactDom from 'react-dom'

const Arrow = ({ startLine, endLine }) => {
  const startLineElement = document.querySelector('.Line:nth-child(' + (startLine + 1) + ')')
  const endLineElement = document.querySelector('.Line:nth-child(' + (endLine + 1) + ')')

  if (!startLineElement || !endLineElement) {
    return null
  }

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

// HACK remove
class ArrowContainer extends React.Component {
  constructor () {
    super()
    this.state = { count: 0 }
  }
  componentDidMount () {
    setTimeout(() => {
      this.setState({ count: 1 })
    }, 1000)
  }
  render () {
    return (<Arrow {...this.props} />)
  }
}

export default ArrowContainer
