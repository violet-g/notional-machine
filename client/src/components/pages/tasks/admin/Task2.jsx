import React from 'react'
import hydrate from '../hydrate'
import { Task2 } from '../Task2'

/** Represents the second step of a model solution **/
const Task2Admin = props => (
  <Task2 {...props} next={{ to: '../3/admin', text: 'Next' }} />
)

export default hydrate(Task2Admin, { userId: 'NULL' })
