import React from 'react'
import uniqBy from 'lodash/uniqBy'
import hydrate from '../hydrate'
import Task2Layout from '../../../layout/Task2Layout'

// checks whether 2 flows are equal
function equals (f1, f2) {
  return f1.start_row === f2.start_row && f1.end_row === f2.end_row && f1.annotation === f2.annotation
}

function getFlowUniqueKey ({ start_row, end_row }) {
  return [start_row, end_row].join(':')
}

class Task2 extends React.Component {
  findFlow (id) {
    let flow = this.props.data.arrows.find(flow => flow.id === id)
    if (!flow) {
      flow = this.props.data.model.arrows.find(flow => flow.id === id)
    }
    return flow
  }
  hasEqual (id, flows) {
    const flow = this.findFlow(id)
    return !!flows.find(equals.bind(this, flow))
  }
  isCorrect (id) {
    return this.hasEqual(id, this.props.data.model.arrows) && this.hasEqual(id, this.props.data.arrows)
  }
  isIncorrect (id) {
    return !this.hasEqual(id, this.props.data.model.arrows)
  }
  isMissed (id) {
    return !this.hasEqual(id, this.props.data.arrows)
  }
  getAnnotation (flows, id) {
    console.log(id)
    const annotation = flows.find(arrow => arrow.id === id).annotation
    if (annotation === true) {
      return 'T'
    }
    if (annotation === false) {
      return 'F'
    }
    return null
  }
  render () {
    let flows = this.props.data.arrows.concat(this.props.data.model.arrows)
    flows = uniqBy(flows, getFlowUniqueKey)

    return (
      <Task2Layout
        {...this.props}
        data={Object.assign({}, this.props.data, { arrows: flows })}
        flow={{
          correct: this.isCorrect.bind(this),
          incorrect: this.isIncorrect.bind(this),
          missed: this.isMissed.bind(this),
          annotation: this.getAnnotation.bind(this, flows)
        }}
        next={{ to: '../3', text: 'Next task' }}
      />
    )
  }
}

export default hydrate(Task2)
