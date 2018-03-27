import React from 'react'
import classnames from 'classnames'
import InputEdit from './InputEdit'
import ConsumeButton from './ConsumeButton'

/** Get all steps with inputs **/
function getSteps (steps, editable = false) {
  if (editable) {
    return steps
  }
  return steps.filter(step => step.input)
}

/** Sort the steps by number **/
function sort (steps) {
  return steps.slice().sort((a, b) => a.number < b.number ? -1 : 1)
}

/** Get a specific step **/
function getPupilStep (steps, i) {
  return sort(getSteps(steps))[i]
}

/** Get the last step **/
function getLastPupilStep (steps) {
  return sort(getSteps(steps)).length
}

/** Represents the table of inputs **/
const InputTable = ({ correct, incorrect, steps, modelSteps, editable, onChange, onConsume, onSave }) => (
  <div className="InputTable card">
    <div className="card-body"><h5 className="card-title">Inputs</h5></div>
    <ul className="list-group list-group-flush">
      {sort(getSteps(modelSteps, editable)).map((step, i) =>
        <li key={step.id} className="list-group-item">
          <div className="row">
            <div className="col-sm-4">
              <p className={classnames({ correct: correct(step.id), incorrect: incorrect(step.id) })}>
                Step #{(getPupilStep(steps, i) || {}).number || '___'}
              </p>
            </div>
            <div className="col-sm-4 text-center">
              {editable && <InputEdit step={step} onChange={onChange} />}
              {!editable && (
                <p className={classnames({ correct: correct(step.id), incorrect: incorrect(step.id) })}>
                  {step.input}
                </p>
              )}
            </div>
            <div className="col-sm-4 text-right">
              {!editable && steps.length > 0 && getLastPupilStep(steps) === i && (
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
  onConsume: () => ({}),
  correct: () => false,
  incorrect: () => false
}

export default InputTable
