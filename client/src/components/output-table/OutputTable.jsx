import React from 'react'
import maxBy from 'lodash/maxBy'
import OutputTableRow from './OutputTableRow'

function sort (steps) {
  return steps.slice().sort((a, b) => a.number < b.number ? -1 : 1)
}

function getLastStep (steps) {
  return maxBy(steps, step => step.number)
}

const OutputTable = ({ steps, value, displayForm, onChange, onSubmit, onAdd }) => (
  <div className="OutputTable card">
    <div className="card-body"><h5 className="card-title">Output</h5></div>

    <ul className="list-group list-group-flush">
      {sort(steps).filter(step => step.output !== null).map(step =>
        <OutputTableRow key={step.id} step={step}>{step.output}</OutputTableRow>
      )}
      {displayForm && (
        <OutputTableRow step={getLastStep(steps)}>
          <form className="form" onSubmit={onSubmit}>
            <input type="text" className="form-control" value={value} onChange={onChange} />
          </form>
        </OutputTableRow>
      )}
    </ul>
    {!displayForm && (
      <div className="card-body">
        <button type="button" className="btn btn-outline-secondary" onClick={onAdd}>New output</button>
      </div>
    )}
  </div>
)

OutputTable.defaultProps = {
  steps: []
}

export default OutputTable
