import React from 'react'
import hydrate from './hydrate'
import Task3Layout from '../../layout/Task3'

class Task3 extends React.Component {
  render () {
    return (<Task3Layout {...this.props} />)
  }
}

export default hydrate(Task3)
