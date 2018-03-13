import React from 'react'
import classnames from 'classnames'

function hasVariableWithoutValue (variables) {
  return !!variables.find(variable => variable.value === null || variable.value === undefined)
}

const VariableUpateForm = ({ readOnly, variables, correct, incorrect, steps, value, onUpdateClick, onChange, onSubmit }) => (
  <div className="VariableUpdateForm card-body">
    {variables.map(variable =>
      <form key={variable.id} className="row form-group" onSubmit={onSubmit}>
        <div className="col-sm-6">
          <p className={classnames({ correct: correct(variable.id), incorrect: incorrect(variable.id) })}>
            Step #{steps.find(step => step.id === variable.step_ID).number}
          </p>
        </div>
        <div className="col-sm-6">
          {(variable.value === null || variable.value === undefined) && (
            <input
              value={value}
              className="form-control form-control-sm"
              type="text"
              placeholder="Value"
              onChange={onChange}
            />
          )}
          {variable.value !== null && variable.value !== undefined && (
            <p className={classnames({ correct: correct(variable.id), incorrect: incorrect(variable.id) })}>
              {variable.value}
            </p>
          )}
        </div>
      </form>
    )}
    {!hasVariableWithoutValue(variables) && !readOnly && (
      <a className="btn btn-outline-secondary" onClick={onUpdateClick}>Update</a>
    )}
  </div>
)

VariableUpateForm.defaultProps = {
  variables: [],
  steps: [],
  correct: () => false,
  incorrect: () => false
}

export default VariableUpateForm
