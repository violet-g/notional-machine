import React from 'react'
import classnames from 'classnames'

/** Represents the tabs in the variable table **/
const VariableTabs = ({ active, variables, onChange }) => (
  <div className="VariableTabs card-header">
    <ul className="nav nav-tabs card-header-tabs">
      {variables.map(({ id, name }) =>
        <li key={id} className="nav-item">
          <a
            className={classnames('nav-link', { active: active === id })}
            onClick={() => onChange(id)}
          >
          {name}
          </a>
        </li>
      )}
    </ul>
  </div>
)

VariableTabs.defaultProps = {
  onChange: () => ({})
}

export default VariableTabs
