import React from 'react'
import client from '../../api-client'
import * as cookie from '../../cookies'
import { USER_ID_COOKIE_NAME } from '../../config'

function getPupilId () {
  return cookie.get(USER_ID_COOKIE_NAME)
}

async function fetchExercise (id) {
  return client.resource('exercise').get(id)
}

async function fetchExpressions (solution) {
  return client.resource('expression').find({ solution_ID: solution.id })
}

async function fetchSteps (solution) {
  return client.resource('step').find({ solution_ID: solution.id })
}

async function fetchArrows (solution) {
  return client.resource('arrow').find({ solution_ID: solution.id })
}

async function fetchVariables (steps) {
  let variables = []
  for (const step of steps) {
    const results = await client.resource('variable').find({ step_ID: step.id })
    variables = variables.concat(results)
  }
  return variables
}

async function fetchSolution (userId, id) {
  let [solution] = await client.resource('solution').find({ exercise_ID: id, pupil_ID: userId })
  if (!solution) {
    solution = await client.resource('solution').create({ exercise_ID: id, pupil_ID: userId })
  }

  // fetch components of solution
  const expressions = await fetchExpressions(solution)
  const steps = await fetchSteps(solution)
  const arrows = await fetchArrows(solution)
  const variables = await fetchVariables(steps)

  return { solution, expressions, steps, arrows, variables }
}

export default function hydrate (ChildComponent, options = {}) {
  return class HydratableComponent extends React.Component {
    constructor () {
      super()
      this.state = { hydrated: false, data: null }
    }
    async hydrate () {
      // fetch exercise
      const exerciseId = this.props.match.params.id
      const exercise = await fetchExercise(exerciseId)

      // fetch the solution of the specified user
      const userId = options.userId ? options.userId : getPupilId()
      const solution = await fetchSolution(userId, exerciseId)

      // fetch teacher solution (a.k.a. model solution, a.k.a. the correct solution)
      const model = await fetchSolution('NULL', exerciseId)

      this.setState({ hydrated: true, data: Object.assign({}, solution, { exercise, model }) })
    }
    async componentDidMount () {
      await this.hydrate()
    }
    async handleRehydrate () {
      await this.hydrate()
    }
    render () {
      if (!this.state.hydrated) {
        return (<p>Loading...</p>)
      }
      return (<ChildComponent {...this.props} {...this.state} rehydrate={this.handleRehydrate.bind(this)} />)
    }
  }
}
