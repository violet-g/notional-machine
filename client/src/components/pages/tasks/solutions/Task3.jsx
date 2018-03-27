import React from 'react'
import hydrate from '../hydrate'
import Task3Layout from '../../../layout/Task3Layout'
import VariableTableController from '../../../controllers/VariableTableController'
import OutputTableController from '../../../controllers/OutputTableController'

/** Represents the solution of the third task **/
class Task3 extends React.Component {

  /** Return the annotation of a flow **/
  getAnnotation (id) {
    const steps = this.props.data.steps.filter(step => step.arrow_ID === id)
    let annotation = steps.map(step => step.number).join(', ')
    const flow = this.props.data.model.arrows.find(flow => flow.id === id)
    if (flow.annotation === true || flow.annotation === false) {
      annotation = (flow.annotation ? 'T' : 'F') + ' ' + annotation
    }
    return annotation
  }

  /** Get a specific step **/
  getStep (steps, id) {
    return steps.find(step => step.id === id)
  }

  /** Get a specific variable **/
  getVariable (variables, id) {
    return variables.find(variable => variable.id === id)
  }

  /** Check if the step of an input is correct **/
  isInputCorrect (id) {
    const step = this.getStep(this.props.data.model.steps, id)
    return !!this.props.data.steps.find(({ number, input }) => number === step.number && input === step.input)
  }

  /** Check if the step of an input is incorrect **/
  isInputIncorrect (id) {
    return !this.isInputCorrect(id)
  }

  /** Check if the step and value of a variable are correct **/
  isVariableCorrect (id) {
    const variable = this.getVariable(this.props.data.variables, id)
    const stepNum = this.getStep(this.props.data.steps, variable.step_ID).number
    return !!this.props.data.model.variables.find(({ name, value, step_ID }) =>
      this.getStep(this.props.data.model.steps, step_ID).number === stepNum &&
        name === variable.name &&
        value === variable.value
    )
  }

  /** Check if the step and value of a variable are incorrect **/
  isVariableIncorrect (id) {
    return !this.isVariableCorrect(id)
  }

  /** Check if the step of an output is correct **/
  isOutputCorrect (id) {
    const step = this.getStep(this.props.data.steps, id)
    return !!this.props.data.model.steps.find(({ number, output }) => number === step.number && output === step.output)
  }

  /** Check if the step of an output is incorrect **/
  isOutputIncorrect (id) {
    return !this.isOutputCorrect(id)
  }
  
  render () {
    return (
      <Task3Layout
        {...this.props}
        flow={{ annotation: this.getAnnotation.bind(this) }}
        input={{ correct: this.isInputCorrect.bind(this), incorrect: this.isInputIncorrect.bind(this) }}
        rightCol={(
          <React.Fragment>
            <VariableTableController
              readOnly={true}
              {...this.props}
              correct={this.isVariableCorrect.bind(this)}
              incorrect={this.isVariableIncorrect.bind(this)}
            />
            <OutputTableController
              readOnly={true}
              {...this.props}
              correct={this.isOutputCorrect.bind(this)}
              incorrect={this.isOutputIncorrect.bind(this)}
            />
          </React.Fragment>
        )}
      />
    )
  }
}

export default hydrate(Task3)
