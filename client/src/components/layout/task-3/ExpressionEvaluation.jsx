import React from 'react'

/** Represents the expression evaluation canvas **/
const ExpressionEvaluation = () => (
  <div className="ExpressionEvaluation card card-body">
    <h5 className="card-title">Evaluate any expressions here:</h5>
    <div className="form">
      <div className="form-group">
        <textarea className="form-control" rows={6} />
      </div>
    </div>
  </div>
)

export default ExpressionEvaluation
