import React from 'react'

const VariableTable = ({ variables, onVariableAdd, onStepAdd }) => (
  <div className="VariableTable">
    <button className="btn btn-default btn-add-col" onClick={onVariableAdd}>[+]</button>
      <div className="variable-table">
        {variables.map((variable, i) =>
          <div key={i} className="variable-table-col">
            <div className="cell"><input type="text" className="form-control" placeholder="Name..." /></div>
              {variable.steps.map((step, j) =>
                <div className="cell" key={[i, j].join('_')}>
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Line..." />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Value..." />
                  </div>
                </div>
              )}
              <button class="btn btn-default" onClick={() => onStepAdd(i)}>[+]</button>
            </div>
          )}
        </div>
  </div>
)

export default VariableTable
