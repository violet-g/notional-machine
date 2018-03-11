import React from 'react'
import { Link } from 'react-router-dom'
import client from '../api-client'

const ExerciseList = ({ exercises }) => (
  <div className="ExerciseList">
    <h1>Available exercises:</h1>
    <table className="table table-striped">
      <tbody>
        {exercises.map(({ id, createdAt }) =>
          <tr key={id}>
            <th> {id} </th>
            <td> Exercise #{id} </td>
            <td> Added on: {createdAt} </td>
            <td><Link to={'/exercise/' + id}> Attempt </Link></td>
          </tr>
        )}
      </tbody>
    </table>
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
