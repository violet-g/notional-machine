import React from 'react'
import hydrate from '../hydrate'
import Task2Layout from '../../../layout/Task2'

class Task2 extends React.Component {
  render () {
    return (
      <Task2Layout
        {...this.props}
        next={{ to: '../3', text: 'Next task' }}
      />
    )
  }
}

export default hydrate(Task2)
