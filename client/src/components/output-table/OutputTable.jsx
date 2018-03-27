import React from 'react'
import classnames from 'classnames'
import maxBy from 'lodash/maxBy'
import OutputTableRow from './OutputTableRow'

/** Sorts the steps by number **/
function sort (steps) {
  return steps.slice().sort((a, b) => a.number < b.number ? -1 : 1)
}

/** Returns the current step **/
function getLastStep (steps) {
  return maxBy(steps, step => step.number)
}

/** Represents the table with outputs **/
const OutputTable = ({ readOnly, correct, incorrect, steps, value, displayForm, onChange, onSubmit, onAdd }) => (
  <div className="OutputTable card">
    <div className="card-body"><h5 className="card-title">Output</h5></div>
    <ul className="list-group list-group-flush">
      {sort(steps).filter(step => step.output !== null).map(step =>
        <OutputTableRow key={step.id} step={step} correct={correct(step.id)} incorrect={incorrect(step.id)}>
          <p className={classnames({ correct: correct(step.id), incorrect: incorrect(step.id) })}>
            {step.output}
          </p>
        </OutputTableRow>
      )}
      {displayForm && !readOnly && (
        <OutputTableRow step={getLastStep(steps)}>
          <form className="form" onSubmit={onSubmit}>
            <input type="text" className="form-control" value={value} onChange={onChange} />
          </form>
        </OutputTableRow>
      )}
    </ul>
    {!displayForm && !readOnly && (
      <div className="card-body">
        <button type="button" className="btn btn-outline-secondary" onClick={onAdd}>New output</button>
      </div>
    )}
  </div>
)

OutputTable.defaultProps = {
  steps: [],
  correct: () => false,
  incorrect: () => false
}

export default OutputTable
