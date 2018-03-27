import React from 'react'

/** Field that allows the admin to add an input at a specific step **/
const InputEdit = ({ step, onChange }) => (
  <div className="InputEdit form-group">
    <input
      type="text"
      className="form-control"
      defaultValue={step.input || ''}
      onChange={e => onChange(step.id, e.target.value)}
    />
  </div>
)

InputEdit.defaultProps = {
  onChange: () => ({})
}

export default InputEdit
