import React from 'react'
import classnames from 'classnames'
import client from '../api-client'

const AdminExerciseList = ({ exercises, expanded, attempted, fetching, onToggle }) => (
  <div className="AdminExerciseList">
    <h1>Current exercises:</h1>
    <table className="table table-striped">
      <tbody>
        {exercises.map(({ id, name, createdAt }) =>
          <tr key={id}>
            <th> {id} </th>
            <td> {name} </td>
            <td> Added on: {createdAt} </td>
            <td>
              <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => onToggle(id)}>
                Attempted by&nbsp;
                <span className={classnames('caret', { 'caret-down': expanded !== id, 'caret-up': expanded === id })} />
              </button>
              <div className={classnames('attempted-by', { collapse: expanded !== id })}>
                {fetching ? <p>Loading...</p> : attempted.map(pupil =>
                  <p key={pupil.id}>{pupil.username}</p>
                )}
              </div>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
)

class AdminExerciseListContainer extends React.Component {
  constructor () {
    super()
    this.state = { exercises: [], attempted: [], expanded: null, fetching: false }
  }
  async componentDidMount () {
    const exercises = await client.resource('exercise').find()
    this.setState({ exercises })
  }
  async handleToggle (id) {
    if (this.state.expanded === id) {
      this.setState({ expanded: null })
      return
    }
    this.setState({ expanded: id, fetching: true })
    const solutions = await client.resource('solution').find({ exercise_ID: id })
    let attempted = []
    for (const solution of solutions) {
      if (solution.pupil_ID) {
        const pupils = await client.resource('pupil').find({ id: solution.pupil_ID })
        attempted = [...attempted, ...pupils]
      }
    }
    this.setState({ fetching: false, attempted })
  }
  render () {
    return (<AdminExerciseList {...this.state} onToggle={this.handleToggle.bind(this)} />)
  }
}

export default AdminExerciseListContainer
