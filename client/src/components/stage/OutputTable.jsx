import React from 'react'

const OutputTable = ({ outputs, onOutputAdd }) => (
  <div className="VariableTable card card-body">
    <h5 className="card-title">Output</h5>
    {outputs.map((output, i) =>
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Output" />
      </div>
    )}
    <a onClick={onOutputAdd} className="btn btn-outline-secondary">Add output +</a>
  </div>
)

export default OutputTable
