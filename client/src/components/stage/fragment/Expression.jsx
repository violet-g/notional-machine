import React from 'react'
import classnames from 'classnames'

const Expression = ({ children, onDelete, correct, incorrect }) => {
  const classNames = {
    'badge-primary': !correct && !incorrect,
    'badge-success': correct,
    'badge-danger': incorrect
  }
  return (
    <span className={classnames("Expression badge", classNames)}>
      {children}
      {onDelete && !correct && !incorrect && (
        <span className="badge badge-danger delete-btn" onClick={onDelete}>x</span>
      )}
    </span>
  )
}

Expression.defaultProps = {
  correct: false,
  incorrect: false
}


export default Expression
