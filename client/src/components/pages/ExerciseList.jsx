import React from 'react'
import { Link } from 'react-router-dom'
import client from '../api-client'

const ExerciseList = ({ exercises }) => (
  <div className="ExerciseList">
    <h1>Select exercise</h1>
    <ul>
      {exercises.map(({ id }) =>
        <li key={id}><Link to={'/exercise/' + id}>Exercise #{id}</Link></li>
      )}
    </ul>
  </div>
)

class ExerciseListContainer extends React.Component {
  constructor () {
    super()
    this.state = { exercises: [] }
  }
  async componentDidMount () {
    const exercises = await client.resource('exercise').find()
    this.setState({ exercises })
  }
  render () {
    return (<ExerciseList {...this.state} />)
  }
}

export default ExerciseListContainer
