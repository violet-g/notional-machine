import React from 'react'

const InputTable = ({ inputs }) => (
  <div className="InputTable card">
    <div className="card-body"><h5 className="card-title">Variables</h5></div>
    <ul className="list-group list-group-flush">
      {inputs.map((input, i) =>
        <li key={i} className="list-group-item">
          <div className="row">
            <div className="col-sm-5">{input[0]}</div>
            <div className="col-sm-2 text-center">/</div>
            <div className="col-sm-5 text-right">{input[1]}</div>
          </div>
        </li>
      )}
    </ul>
  </div>
)

export default InputTable
