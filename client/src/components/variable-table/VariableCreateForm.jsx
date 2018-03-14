import React from 'react'

const VariableCreateForm = ({ value, onChange, onSubmit }) => (
  <div className="VariableCreateForm card-body">
    <h5 className="card-title">Variables</h5>
    <form onSubmit={onSubmit}>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Variable name"
          value={value}
          onChange={onChange}
        />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="submit">
            Add variable
          </button>
        </div>
      </div>
    </form>
  </div>
)

export default VariableCreateForm
