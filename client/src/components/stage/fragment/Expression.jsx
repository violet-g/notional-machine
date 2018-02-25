import React from 'react'
import classnames from 'classnames'

const Expression = ({ children, onDelete, correct, incorrect, missed }) => {
  const classNames = {
    'badge-primary': !correct && !incorrect && !missed,
    'badge-success': correct,
    'badge-danger': incorrect,
    'badge-danger-outline': missed
  }
  return (
    <span className={classnames("Expression badge", classNames)}>
      {children}
      {onDelete && !correct && !incorrect && !missed && (
        <span className="badge badge-danger delete-btn" onClick={onDelete}>x</span>
      )}
    </span>
  )
}

Expression.defaultProps = {
  correct: false,
  incorrect: false,
  missed: false
}

export default Expression
