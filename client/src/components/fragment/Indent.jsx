import React from 'react'
import PropTypes from 'prop-types'

const INDENT_SIZE_PX = 10

/** Represents the indentation of a line **/
const Indent = ({ size }) => (
  <span className="Indent" style={{ paddingRight: (size * INDENT_SIZE_PX) + 'px' }} />
)

Indent.defaultProps = {
  size: 0
}

Indent.propTypes = {
  /** The size of the indent (how many spaces). Defaults to 0. **/
  size: PropTypes.number
}

export default Indent
