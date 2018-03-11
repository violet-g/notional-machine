import React from 'react'
import hydrate from '../hydrate'
import { Task1 } from '../Task1'

const Task1Admin = props => (
  <Task1 {...props} next={{ to: '../2/admin', text: 'Next' }} />
)

export default hydrate(Task1Admin, { userId: 'NULL' })
