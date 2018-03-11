import React from 'react'
import PropTypes from 'prop-types'
import Expression from './Expression'

function sort (expressions) {
  return expressions.slice().sort((a, b) => (a.start_pos < b.start_pos) ? -1 : 1)
}

const ExpressionWrapper = ({ expressions, expression, children }) => {
  const expressionProps = Object.assign({}, expression)
  const tokens = React.Children.toArray(children)
  const sorted = sort(expressions)
  let result = []
  for (let i = 0; i < sorted.length; i++) {
    const id = sorted[i].id
    const prev = i === 0 ? 0 : (sorted[i - 1].end_pos + 1)
    const curr = sorted[i].start_pos
    const next = sorted[i].end_pos + 1
    result = [...result, ...tokens.slice(prev, curr)]
    result = [...result, <Expression id={id} {...expressionProps}>{tokens.slice(curr, next)}</Expression>]
  }
  const last = sorted.length === 0 ? 0 : (sorted[sorted.length - 1].end_pos + 1)
  result = [...result, ...tokens.slice(last)]
  result = result.map((child, i) => React.cloneElement(child, { key: `wrapped_${i}` }))
  return result
}

ExpressionWrapper.defaultProps = {
  expressions: []
}

ExpressionWrapper.propTypes = {
  /** An optional array of selected expressions. **/
  expressions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    line: PropTypes.number.isRequired,
    start_pos: PropTypes.number.isRequired,
    end_pos: PropTypes.number.isRequired
  })),

  /** Props which are passed down to the expression components **/
  expression: PropTypes.object
}

export default ExpressionWrapper
