import React from 'react'
import ExerciseList from './ExerciseList'
import Exercise from './Exercise'

// TODO modify webpack config to provide the API url via process.env.API_URL
const API_URL = 'http://localhost:3000'

const tasks = [
  'Step 1: Read the following piece of code carefully and select all expressions that are used in its construction.',
  'Step 2: Visualise flow of control in the code below.',
  'Step 3: Do step 3.'
]

// TODO remove
// const fragment = [
//   { indent: 0, tokens: ['a', '=', '0'] },
//   { indent: 0, tokens: ['while', 'a', '<', '3'] },
//   { indent: 1, tokens: ['print', 'a'] },
//   { indent: 1, tokens: ['a', '=', 'a', '+', '1'] },
//   { indent: 0, tokens: ['a', '=', 'a', '*', '5'] },
//   { indent: 0, tokens: ['print', 'a'] }
// ]

// TODO remove
// const solution = {
//   expressions: [
//     [0, 2, 2],
//     [1, 1, 3],
//     [2, 1, 1],
//     [3, 2, 4],
//     [4, 2, 4],
//     [5, 1, 1]
//   ],
//   flows: [
//     [0, 1],
//     [1, 2],
//     [2, 3],
//     [3, 1],
//     [1, 4],
//     [4, 5]
//   ],
//   inputs: [
//     [5, 79],
//     [4, 1],
//     [3, 302]
//   ]
// }

async function getApiData (resource, query = {}) {
  let queryString = Object.keys(query).map(key => `${key}=${query[key]}`).join('&')
  if (queryString !== '') {
    queryString = '?' + queryString
  }
  const response = await fetch(API_URL + '/' + resource + queryString)
  if (response.status !== 200) {
    throw new Error(response.status)
  }
  return response.json()
}

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      view: 'Loading',
      exercises: [],
      tasks,
      fragment: [],
      solution: [],
      error: ''
    }
  }
  async componentDidMount () {
    try {
      const exercises = await getApiData('exercise')
    } catch (error) {
      this.setState({ view: 'Error', error: error.message })
    }
  }
  handleViewChage (view) {
    this.setState({ view })
  }
  async handleExerciseSelect ({ id, code_fragment }) {
    // parse the code fragment
    const fragment = code_fragment.split('\n')
    for (let i = 0; i < fragment.length; i++) {
      const line = frgment[i]
      const indent = line.match(/^\s*/)[0].length
      const tokens = line.replace(/^\s*/, '').split(' ')
      fragment[i] = { indent, tokens }
    }

    this.setState({ view: 'Loading', fragment })

    try {
      const solutions = await getApiData('solution', { exercise_ID: id, pupil_ID: 'NULL' })
      const expressions = await getApiData('expression', { solution_ID: solutions[0].id })
      const steps = await getApiData('step', { solution_ID: solutions[0].id })
      let flows = []
      for (step of steps) {
        flows.concat(await getApiData('arrow', { step_ID: step.id }))
      }
      const solutions = [
        expressions: expressions.map(({ line, start_pos, end_pos }) => [line, start_pos, end_pos]),
        flows: flows.map(({ start_row, end_row }) => [start_row, end_row]),
        inputs: [/* TODO ??? */]
      ]
      this.setState({ view: 'Exercise', solutions })
    } catch (error) {
      this.setState({ view: 'Error', error: error.message })
    }
  }
  render() {
    switch(this.state.view) {
      case 'ExerciseList':
        return (<ExerciseList {...this.state} onExerciseSelect={this.handleExerciseSelect.bind(this)} />)
      case 'Exercise':
        return (<Exercise {...this.state} />)
      case 'Error':
        return (<p>An unexpected error occurred. Please, refresh the page. Error: {this.state.error}</p>)
      case 'Loading':
      default:
        return (<p>Insert some fancy loading animation here</p>)
    }
  }


export default App
