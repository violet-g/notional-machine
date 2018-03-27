import React from 'react'
import classnames from 'classnames'
import { Link } from 'react-router-dom'
import client from '../api-client'

function formatDate (dateString) {
  const [y, m, d] = dateString.replace(/T.*$/, '').split('-')
  return [d, m, y].join('/')
}

/** Represents the list of exercises the admin sees **/
const AdminExerciseList = ({ values, exercises, expanded, attempted, fetching, onToggle, onChange, onCreate, onDelete }) => (
  <div className="AdminExerciseList container">
    <h1>Current exercises</h1>
    <table className="table table-striped">
      <tbody>
        {exercises.map(({ id, name, createdAt }) =>
          <tr key={id}>
            <th> {id} </th>
            <td> {name} </td>
            <td> Added on {formatDate(createdAt)} </td>
            <td className="text-right">
              <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => onToggle(id)}>
                Attempted by&nbsp;
                <span className={classnames('caret', { 'caret-down': expanded !== id, 'caret-up': expanded === id })} />
              </button>
              &nbsp;
              <Link className="btn btn-sm btn-outline-success" to={`/exercise/${id}/task/1/admin`}>Add solution</Link>
              &nbsp;
              <button type="button" className="btn btn-sm btn-outline-danger" onClick={() => onDelete(id)}>
                Delete
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
    <div className="create-exercise">
      <form className="form row" onSubmit={onCreate}>
        <div className="col-sm-6">
          <h1>Create</h1>
          <div className="form-group">
            <label>Name</label>
            <input name="name" className="form-control" type="text" value={values.name} onChange={onChange} />
          </div>
          <div className="form-group">
            <label>Program Code</label>
            <textarea rows="6" name="code_fragment" className="form-control" value={values.code_fragment} onChange={onChange} />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">Create</button>
          </div>
        </div>
      </form>
    </div>
  </div>
)

/** Adds the functionality to the ExerciseList component **/
class AdminExerciseListContainer extends React.Component {

  constructor () {
    super()
    this.state = {
      exercises: [],
      attempted: [],
      expanded: null,
      fetching: false,
      values: { name: '', code_fragment: '' }
    }
  }

  /** Fetches all exercises from the server **/
  async fetchExercises () {
    const exercises = await client.resource('exercise').find()
    this.setState({ exercises })
  }

  componentDidMount () {
    this.fetchExercises()
  }

  /** Get the pupils that have attempted an exercise **/
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

  /** Add changes to the new code fragment **/
  handleChange (e) {
    this.setState({ values: Object.assign({}, this.state.values, { [e.target.name]: e.target.value }) })
  }

  /** Creates a new exercise with the code fragment added **/
  async handleCreate (e) {
    e.preventDefault()
    await client.resource('exercise').create(this.state.values)
    this.setState({ values: { name: '', code_fragment: '' } })
    this.fetchExercises()
  }

  /** Deletes an exercise **/
  async handleDelete (id) {
    await client.resource('exercise').remove(id)
    this.fetchExercises()
  }
  
  render () {
    return (
      <AdminExerciseList
        {...this.state}
        onToggle={this.handleToggle.bind(this)}
        onChange={this.handleChange.bind(this)}
        onCreate={this.handleCreate.bind(this)}
        onDelete={this.handleDelete.bind(this)}
      />
    )
  }
}

export default AdminExerciseListContainer
