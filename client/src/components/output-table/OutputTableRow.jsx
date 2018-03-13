import React from 'react'

const OutputTableRow = ({ step, children }) => (
  <li className="list-group-item">
    <div className="row">
      <div className="col-sm-6">Step #{step.number}</div>
      <div className="col-sm-6 text-right">{children}</div>
    </div>
  </li>
)

export default OutputTableRow
