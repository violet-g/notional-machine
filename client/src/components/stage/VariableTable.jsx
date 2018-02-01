import React from 'react'

const VariableTable = ({ variables, onVariableAdd, onStepAdd }) => (
  <div className="VariableTable">
    {variables.map((variable, i) =>
      <div key={i} className="col">
        <div className="cell">TODO variable name input</div>
        {variable.steps.map((step, j) =>
          <div className="cell" key={[i, j].join('_')}>TODO step inputs</div>
        )}
        <div onClick={() => onStepAdd(i)}>[+]</div>
      </div>
    )}
    <div className="col" onClick={onVariableAdd}>[+]</div>
  </div>
)

export default VariableTable
