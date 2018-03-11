import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import client from './api-client'

// pages
import Err from './pages/Err'
import Exercise from './pages/Exercise'
import ExerciseCreate from './pages/ExerciseCreate'
import ExerciseList from './pages/ExerciseList'
import Home from './pages/Home'
import Signup from './pages/Signup'

const App = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/exercise-create" component={ExerciseCreate} />
      <Route exact path="/exercise-list" component={ExerciseList} />
      <Route path="/exercise/:id" component={Exercise} />
      <Route exact path="/error" component={Err} />
      <Route exact path="/signup" component={Signup} />
    </Switch>
  </HashRouter>
)

export default App
