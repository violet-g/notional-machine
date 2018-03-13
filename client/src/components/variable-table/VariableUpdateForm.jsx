import React from 'react'

function hasVariableWithoutValue (variables) {
  return !!variables.find(variable => variable.value === null || variable.value === undefined)
}

const VariableUpateForm = ({ variables, steps, value, onUpdateClick, onChange, onSubmit }) => (
  <div className="VariableUpdateForm card-body">
    {variables.map(variable =>
      <form key={variable.id} className="row form-group" onSubmit={onSubmit}>
        <div className="col-sm-6">
          Step #{steps.find(step => step.id === variable.step_ID).number}
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
            <p>{variable.value}</p>
          )}
        </div>
      </form>
    )}
    {!hasVariableWithoutValue(variables) && (
      <a className="btn btn-outline-secondary" onClick={onUpdateClick}>Update</a>
    )}
  </div>
)

VariableUpateForm.defaultProps = {
  variables: [],
  steps: []
}

export default VariableUpateForm
