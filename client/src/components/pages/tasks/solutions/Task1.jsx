import React from 'react'
import uniqBy from 'lodash/uniqBy'
import hydrate from '../hydrate'
import Task1Layout from '../../../layout/Task1'

// checks whether 2 expressions are equal
function equals (e1, e2) {
  return e1.line === e2.line && e1.start_pos === e2.start_pos && e1.end_pos === e2.end_pos
}

function getExpressionUniqueKey ({ line, start_pos, end_pos }) {
  return [line, start_pos, end_pos].join(':')
}

class Task1 extends React.Component {
  findExpression (id) {
    let expression = this.props.data.expressions.find(expression => expression.id === id)
    if (!expression) {
      expression = this.props.data.model.expressions.find(expression => expression.id === id)
    }
    return expression
  }
  hasEqual (id, expressions) {
    const expression = this.findExpression(id)
    return !!expressions.find(equals.bind(this, expression))
  }
  isCorrect (id) {
    return this.hasEqual(id, this.props.data.model.expressions) && this.hasEqual(id, this.props.data.expressions)
  }
  isIncorrect (id) {
    return !this.hasEqual(id, this.props.data.model.expressions)
  }
  isMissed (id) {
    return !this.hasEqual(id, this.props.data.expressions)
  }
  render () {
    let expressions = this.props.data.expressions.concat(this.props.data.model.expressions)
    expressions = uniqBy(expressions, getExpressionUniqueKey)

    return (
      <Task1Layout
        {...this.props}
        data={Object.assign({}, this.props.data, { expressions })}
        expression={{
          correct: this.isCorrect.bind(this),
          incorrect: this.isIncorrect.bind(this),
          missed: this.isMissed.bind(this)
        }}
        next={{ to: '../2', text: 'Next task' }}
      />
    )
  }
}

export default hydrate(Task1)
