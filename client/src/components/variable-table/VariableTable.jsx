import React from 'react'
import uniqBy from 'lodash/uniqBy'
import VariableCreateForm from './VariableCreateForm'
import VariableTabs from './VariableTabs'
import VariableUpdateForm from './VariableUpdateForm'

function getVariable (variables, id) {
  return variables.find(variable => variable.id === id)
}

function getActiveVariables (variables, id) {
  const variable = getVariable(variables, id)
  return variables.filter(({ name }) => name === variable.name)
}

function getUniqVariables (variables) {
  return uniqBy(variables, variable => variable.name)
}

const VariableTable = ({ readOnly, correct, incorrect, active, variables, steps, create, update, onActiveChange }) => (
  <div className="VariableTable card">
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
