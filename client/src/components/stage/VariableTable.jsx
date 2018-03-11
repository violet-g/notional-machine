import React from 'react'
import classnames from 'classnames'

class VariableTable extends React.Component {
  constructor () {
    super()
    this.state = { variableName: '', activeVariable: null }
  }
  handleVariableNameChange ({ target: { value } }) {
    this.setState({ variableName: value })
  }
  handleVariableAdd (e) {
    e.preventDefault()
    if (this.state.variableName === '') {
      return
    }
    if (this.state.activeVariable === null) {
      this.setState({ activeVariable: 0 })
    }
    this.props.onVariableAdd(this.state.variableName)
    this.setState({ variableName: '' })
  }
  handleActiveVariableChange (i) {
    this.setState({ activeVariable: i })
  }
  handleStepAdd () {
    this.props.onStepAdd(this.state.activeVariable)
  }
  render () {
    const { variables, onVariableAdd } = this.props
    return (
      <div className="VariableTable card">
        <div className="card-body">
          <h5 className="card-title">Variables</h5>
          <form onSubmit={this.handleVariableAdd.bind(this)}>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Variable name"
                value={this.state.variableName}
                onChange={this.handleVariableNameChange.bind(this)}
              />
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="submit">
                  Add variable +
                </button>
              </div>
            </div>
          </form>
        </div>
        {this.state.activeVariable !== null && (
          <div className="card-header">
            <ul className="nav nav-tabs card-header-tabs">
              {variables.map((variable, i) =>
                <li key={i} className="nav-item">
                  <a
                    className={classnames('nav-link', { active: this.state.activeVariable === i })}
                    onClick={this.handleActiveVariableChange.bind(this, i)}
                  >
                    {variable.name}
                  </a>
                </li>
              )}
            </ul>
          </div>
        )}
        {this.state.activeVariable !== null && (
          <div className="card-body">
            {this.props.variables[this.state.activeVariable] && this.props.variables[this.state.activeVariable].steps.map((step, i) =>
              <div key={i} className="row form-group">
                <div className="col-sm-6">
                  <input className="form-control form-control-sm" type="text" placeholder="Line" />
                </div>
                <div className="col-sm-6">
                  <input className="form-control form-control-sm" type="text" placeholder="Value" />
                </div>
              </div>
            )}
            <a onClick={this.handleStepAdd.bind(this)} className="btn btn-outline-secondary">Add step +</a>
          </div>
        )}
      </div>
    )
  }
}

export default VariableTable
