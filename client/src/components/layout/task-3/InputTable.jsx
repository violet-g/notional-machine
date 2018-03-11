import React from 'react'
import InputEdit from './InputEdit'
import ConsumeButton from './ConsumeButton'

function getSteps (steps, editable = false) {
  if (editable) {
    return steps
  }
  return steps.filter(step => step.input)
}

function sort (steps) {
  return steps.slice().sort((a, b) => a.number < b.number ? -1 : 1)
}

function getPupilStep (steps, i) {
  return sort(getSteps(steps))[i]
}

function getLastPupilStep (steps) {
  return sort(getSteps(steps)).length
}

const InputTable = ({ steps, modelSteps, editable, onChange, onConsume, onSave }) => (
  <div className="InputTable card">
    <div className="card-body"><h5 className="card-title">Inputs</h5></div>
    <ul className="list-group list-group-flush">
      {sort(getSteps(modelSteps, editable)).map((step, i) =>
        <li key={step.id} className="list-group-item">
          <div className="row">
            <div className="col-sm-4">Step #{(getPupilStep(steps, i) || {}).number || '___'}</div>
            <div className="col-sm-4 text-center">
              {editable ? <InputEdit step={step} onChange={onChange} /> : step.input}
            </div>
            <div className="col-sm-4 text-right">
              {steps.length > 0 && getLastPupilStep(steps) === i && (
                <ConsumeButton onClick={() => onConsume(step.input)} />
              )}
            </div>
          </div>
        </li>
      )}
    </ul>
    {editable && (
      <div className="card-body">
        <button type="button" className="btn btn-primary" onClick={onSave}>Save inputs</button>
      </div>
    )}
  </div>
)

InputTable.defaultProps = {
  inputs: [],
  editable: false,
  onConsume: () => ({})
}

export default InputTable