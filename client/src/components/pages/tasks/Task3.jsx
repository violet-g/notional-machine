import React from 'react'
import maxBy from 'lodash/maxBy'
import hydrate from './hydrate'
import Task3Layout from '../../layout/Task3Layout'
import VariableTableController from '../../controllers/VariableTableController'
import OutputTableController from '../../controllers/OutputTableController'
import client from '../../api-client'

/** Represents the third task of an exercise **/
class Task3 extends React.Component {

  /** Adds a step to an arrow **/
  async handleClick (id) {
    const lastStep = maxBy(this.props.data.steps, step => step.number)
    const number = lastStep === undefined ? 1 : lastStep.number + 1
    const solution = this.props.data.solution.id
    await client.resource('step').create({ number, solution_ID: solution, arrow_ID: id })
    this.props.rehydrate()
  }

  /** Returns current step **/
  getLastStep () {
    return maxBy(this.props.data.steps, step => step.number)
  }

  /** Returns flow annotation **/
  getAnnotation (id) {
    const steps = this.props.data.steps.filter(step => step.arrow_ID === id)
    let annotation = steps.map(step => step.number).join(', ')
    const flow = this.props.data.model.arrows.find(flow => flow.id === id)
    if (flow.annotation === true || flow.annotation === false) {
      annotation = (flow.annotation ? 'T' : 'F') + ' ' + annotation
    }
    return annotation
  }

  /** Adds step to an input **/
  async handleConsume (input) {
    const lastStep = this.getLastStep()
    await client.resource('step').update(lastStep.id, { input })
    this.props.rehydrate()
  }
  
  render () {
    return (
      <Task3Layout
        {...this.props}
        flow={{ onClick: this.handleClick.bind(this), annotation: this.getAnnotation.bind(this) }}
        input={this.props.input || { onConsume: this.handleConsume.bind(this) }}
        rightCol={(
          <React.Fragment>
            <VariableTableController {...this.props} />
            <OutputTableController {...this.props} />
          </React.Fragment>
        )}
      />
    )
  }
}

Task3.defaultProps = {
  next: { to: '3/solution', text: 'Check Task 3' }
}

export { Task3 }

export default hydrate(Task3)
