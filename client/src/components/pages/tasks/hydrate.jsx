import React from 'react'
import client from '../../api-client'
import * as cookie from '../../cookies'
import { USER_ID_COOKIE_NAME } from '../../config'

function getUserId () {
  return cookie.get(USER_ID_COOKIE_NAME)
}

async function fetchExercise (id) {
  return client.resource('exercise').get(id)
}

async function fetchSolution (id) {
  const pupilId = getUserId()
  let [solution] = await client.resource('solution').find({ exercise_ID: id, pupil_ID: pupilId })
  if (!solution) {
    solution = await client.resource('solution').create({ exercise_ID: id, pupil_ID: pupilId })
  }
  return solution
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

export default function hydrate (ChildComponent) {
  return class HydratableComponent extends React.Component {
    constructor () {
      super()
      this.state = { hydrated: false, data: null }
    }
    async hydrate () {
      const exerciseId = this.props.match.params.id
      const exercise = await fetchExercise(exerciseId)
      const solution = await fetchSolution(exerciseId)
      const expressions = await fetchExpressions(solution)
      const steps = await fetchSteps(solution)
      const arrows = await fetchArrows(solution)

      this.setState({
        hydrated: true,
        data: {
          exercise,
          solution,
          expressions,
          steps,
          arrows
        }
      })
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
