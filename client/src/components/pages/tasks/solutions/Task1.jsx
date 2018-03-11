import React from 'react'
import hydrate from '../hydrate'
import Task1Layout from '../../../layout/Task1'

class Task1 extends React.Component {
  render () {
    return (
      <Task1Layout
        {...this.props}
        next={{ to: '../2', text: 'Next task' }}
      />
    )
  }
}

export default hydrate(Task1)
