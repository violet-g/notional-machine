import React from 'react'
import { Link } from 'react-router-dom'
import client from '../api-client'

function formatDate (dateString) {
  const [y, m, d] = dateString.replace(/T.*$/, '').split('-')
  return [d, m, y].join('/')
}

const ExerciseList = ({ exercises }) => (
  <div className="ExerciseList">
    <h1>Available exercises:</h1>
    <table className="table table-striped">
      <tbody>
        {exercises.map(({ id, name, createdAt }) =>
          <tr key={id}>
            <th> {id} </th>
            <td> {name} </td>
            <td> Exercise #{id} </td>
            <td> Added on: {formatDate(createdAt)} </td>
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
