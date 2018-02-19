import React from 'react'
import classnames from 'classnames'

const Expression = ({ children, onDelete, correct, incorrect }) => (
  <span className={classnames("Expression badge badge-primary", { correct, incorrect })}>
    {children}
    {onDelete && <span className="badge badge-danger delete-btn" onClick={onDelete}>x</span>}
    {onDelete && !correct && !incorrect && (
      <span className="badge badge-danger delete-btn" onClick={onDelete}>x</span>
    )}
    </span>
)

Expression.defaultProps = {
  correct: false,
  incorrect: false
}


export default Expression
