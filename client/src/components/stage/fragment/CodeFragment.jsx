import React from 'react'
import Expression from './Expression'
import Line from './Line'
import Flow from './Flow'
import { times, includes } from 'lodash'

const CodeFragment = ({ children }) => {
  const childrenArray = React.Children.toArray(children)
  const lines = childrenArray.filter(child => child.type === Line)
  const expressions = childrenArray
    .filter(child => child.type === Expression)
    .map(expression => {
      return React.cloneElement(
        expression,
        expression.props,
        React.Children.toArray(lines[expression.props.line].props.children).slice(expression.props.start, expression.props.end + 1)
      )
    })
  const newLines = lines.map((line, i) => {
    const lineExpressions = expressions.filter(expression => expression.props.line === i)
    let tokens = React.Children.toArray(line.props.children)
    for (const expression of lineExpressions) {
      tokens = [
        ...tokens.slice(0, expression.props.start),
        expression,
        ...times(expression.props.end - expression.props.start, null).map(el => null),
        ...tokens.slice(expression.props.end + 1)
      ]
    }
    return React.cloneElement(line, line.props, tokens)
  })
  const flows = childrenArray.filter(child => child.type === Flow)
  const rest = childrenArray.filter(child => !includes([Line, Flow, Expression], child.type))

  return (
    <div className="CodeFragment">
      {newLines}
      {rest}
      <div className="FlowContainer">
        <svg>
          {flows}
        </svg>
      </div>
    </div>
  )
}

export default CodeFragment
