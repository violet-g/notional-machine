import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { getBoolValue } from './util'
import Indent from './Indent'

const Line = ({ indent, children, onClick, highlightable, highlighted, line, start, end }) => {
  const isHighlightable = getBoolValue(highlightable, line)
  const isHighlighted = getBoolValue(highlighted, line)

  const className = classnames('Line list-group-item', {
    active: isHighlighted,
    'list-group-item-action': isHighlightable,
    start,
    end
  })
  return (
    <div className={className} onClick={() => onClick(line)}>
      <Indent size={indent} />{children}
    </div>
  )
}

Line.defaultProps = {
  indent: 0,
  onClick: () => ({}),
  highlightable: false,
  highlighted: false,
  start: false,
  end: false
}

Line.propTypes = {
  /** The size of the line indent (how many spaces). Defaults to 0. **/
  indent: PropTypes.number,

  /** Called when the line is clicked. The line index is passed as argument. **/
  onClick: PropTypes.func,

  /**
   * Determines whether this line is highlighted.
   * Can be a function in which case it's called with the line index and should return boolean.
   */
  highlighted: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),

  /**
   * Determines whether this line is highlightable. If a line is highlightable
   * then it will change color when it's hovered.
   * Can be a function in which case it's called with the line index and should return boolean.
   */
  highlightable: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),

  /** The index of this line in the code fragment **/
  line: PropTypes.number.isRequired,

  /** Indicates if this is a start line **/
  start: PropTypes.bool,

  /** Indicates if this is an end line **/
  end: PropTypes.bool
}

export default Line
