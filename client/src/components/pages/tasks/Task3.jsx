import React from 'react'
import maxBy from 'lodash/maxBy'
import hydrate from './hydrate'
import Task3Layout from '../../layout/Task3'
import client from '../../api-client'

class Task3 extends React.Component {
  async handleClick (id) {
    const lastStep = maxBy(this.props.data.steps, step => step.number)
    const number = lastStep === undefined ? 1 : lastStep.number + 1
    const solution = this.props.data.solution.id
    await client.resource('step').create({ number, solution_ID: solution, arrow_ID: id })
    this.props.rehydrate()
  }
  getAnnotation (id) {
    const steps = this.props.data.steps.filter(step => step.arrow_ID === id)
    let annotation = steps.map(step => step.number).join(', ')
    const flow = this.props.data.model.arrows.find(flow => flow.id === id)
    if (flow.annotation === true || flow.annotation === false) {
      annotation = (flow.annotation ? 'T' : 'F') + ' ' + annotation
    }
    return annotation
  }
  async handleConsume (input) {
    const lastStep = maxBy(this.props.data.steps, step => step.number)
    await client.resource('step').update(lastStep.id, { input })
    this.props.rehydrate()
  }
  render () {
    return (
      <Task3Layout
        {...this.props}
        flow={{ onClick: this.handleClick.bind(this), annotation: this.getAnnotation.bind(this) }}
        input={{ onConsume: this.handleConsume.bind(this) }}
      />
    )
  }
}

Task3.defaultProps = {
  next: { to: '3/solution', text: 'Check Task 3' }
}

export { Task3 }

export default hydrate(Task3)
