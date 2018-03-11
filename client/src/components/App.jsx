import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import client from './api-client'

// pages
import Err from './pages/Err'
import Exercise from './pages/Exercise'
import ExerciseList from './pages/ExerciseList'
import Home from './pages/Home'
import Signup from './pages/Signup'

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
//     [3, 4],
//     [4, 5]
//   ],
//   inputs: [
//     [5, 79],
//     [4, 1],
//     [3, 302]
//   ]
// }

const App = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/exercise-list" component={ExerciseList} />
      <Route path="/exercise/:id" component={Exercise} />
      <Route exact path="/error" component={Err} />
      <Route exact path="/signup" component={Signup} />
    </Switch>
  </HashRouter>
)

export default App
