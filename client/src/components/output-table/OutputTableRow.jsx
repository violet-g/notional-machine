import React from 'react'
import classnames from 'classnames'

const OutputTableRow = ({ step, correct, incorrect, children }) => (
  <li className="list-group-item">
    <div className="row">
      <div className="col-sm-6">
        <p className={classnames({ correct, incorrect })}>Step #{step.number}</p>
      </div>
      <div className="col-sm-6 text-right">{children}</div>
    </div>
  </li>
)

export default OutputTableRow
