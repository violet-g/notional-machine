import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { getBoolValue } from './util'

const Expression = ({ children, onDelete, correct, incorrect, missed, id }) => {
  const isCorrect = getBoolValue(correct, id)
  const isIncorrect = getBoolValue(incorrect, id)
  const isMissed = getBoolValue(missed, id)

  const classNames = {
    'badge-primary': !isCorrect && !isIncorrect && !isMissed,
    'badge-success': isCorrect,
    'badge-danger': isIncorrect,
    'badge-danger-outline': isMissed
  }

  return (
    <span className={classnames("Expression badge", classNames)}>
      {children}
      {onDelete && !isCorrect && !isIncorrect && !isMissed && (
        <span className="badge badge-danger delete-btn" onClick={() => onDelete(id)}>x</span>
      )}
    </span>
  )
}

Expression.defaultProps = {
  correct: false,
  incorrect: false,
  missed: false
}

Expression.propTypes = {
  /** The primary key of this expression **/
  id: PropTypes.number.isRequired,

  /** Called with the expression ID when delete button is clicked. **/
  onDelete: PropTypes.func,

  /**
   * Determines whether this expression is marked as correct.
   * Can be a function in which case it's called with the Exercise ID and should return boolean.
   */
  correct: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),

  /**
   * Determines whether this expression is marked as incorrect.
   * Can be a function in which case it's called with the Exercise ID and should return boolean.
   */
  incorrect: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),


  /**
   * Determines whether this expression is marked as missed. Missed expressions are
   * expressions which were in the model solution but the pupil failed to highlight.
   * Can be a function in which case it's called with the Exercise ID and should return boolean.
   */
  missed: PropTypes.oneOfType([PropTypes.bool, PropTypes.func])
}

export default Expression
