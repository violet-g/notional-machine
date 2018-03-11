import React from 'react'
import PropTypes from 'prop-types'
import {
  CODE_FRAGMENT_WIDTH,
  CODE_FRAGMENT_PADDING_VERTICAL,
  CODE_FRAGMENT_PADDING_HORIZONTAL,
  LINE_WIDTH,
  LINE_HEIGHT,
  ADJACENT_LINES_ARROW_SVG_WIDTH,
  ADJACENT_LINES_ARROW_SVG_HEIGHT,
  FLOW_WIDTH,
  getLineY
} from './dimensions'

const Popover = ({ flowId, flows, onClick }) => {
  if (!flowId || flows.length === 0) {
    return null
  }

  const { start_row: start, end_row: end } = flows.find(flow => flow.id === flowId)
  let style = {}
  if (start === end - 1) {
    const x = CODE_FRAGMENT_PADDING_HORIZONTAL + LINE_WIDTH / 2
    const y = CODE_FRAGMENT_PADDING_VERTICAL + (start + 1) * LINE_HEIGHT - ADJACENT_LINES_ARROW_SVG_HEIGHT / 2
    style = { left: x, top: y }
  } else if (start < end) {
    const x = CODE_FRAGMENT_PADDING_HORIZONTAL + LINE_WIDTH - FLOW_WIDTH
    const y = getLineY(start) + 20
    style = { left: x, top: y }
  } else if (start > end) {
    const x = CODE_FRAGMENT_PADDING_HORIZONTAL
    const y = getLineY(end) + 20
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

Popover.defaultProps = {
  flows: [],
  onClick: () => ({})
}

Popover.propTypes = {
  /** The ID of the flow this popover is attached to **/
  flowId: PropTypes.number,

  /** All existing flows **/
  flows: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    start_row: PropTypes.number.isRequired,
    end_row: PropTypes.number.isRequired
  })),

  /** Called when an option is selected **/
  onClick: PropTypes.func
}

export default Popover
