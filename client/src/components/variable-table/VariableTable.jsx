import React from 'react'
import uniqBy from 'lodash/uniqBy'
import VariableCreateForm from './VariableCreateForm'
import VariableTabs from './VariableTabs'
import VariableUpdateForm from './VariableUpdateForm'

/** Returns a single variable **/
function getVariable (variables, id) {
  return variables.find(variable => variable.id === id)
}

/** Returns the active variables **/
function getActiveVariables (variables, id) {
  const variable = getVariable(variables, id)
  return variables.filter(({ name }) => name === variable.name)
}

/** Returns all unique variables **/
function getUniqVariables (variables) {
  return uniqBy(variables, variable => variable.name)
}

/** Represents the table of variables for task 3 **/
const VariableTable = ({ readOnly, correct, incorrect, active, variables, steps, create, update, onActiveChange }) => (
  <div className="VariableTable card">
    <div className="card-body">
      <h5 className="card-title">Variables</h5>
    </div>
    {!readOnly && <VariableCreateForm {...create} />}
    {variables.length > 0 && (
      <VariableTabs
        active={active}
        variables={getUniqVariables(variables)}
        onChange={onActiveChange}
      />
    )}
    {active !== null && (
      <VariableUpdateForm
        readOnly={readOnly}
        correct={correct}
        incorrect={incorrect}
        steps={steps}
        variables={getActiveVariables(variables, active)}
        {...update}
      />
    )}
  </div>
)

VariableTable.defaultProps = {
  active: null,
  steps: [],
  variables: []
}

export default VariableTable
