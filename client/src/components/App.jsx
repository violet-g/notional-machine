import React from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import client from './api-client'

// pages
import AdminExerciseList from './pages/AdminExerciseList'
import Err from './pages/Err'
import Exercise from './pages/Exercise'
import ExerciseCreate from './pages/ExerciseCreate'
import ExerciseList from './pages/ExerciseList'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'

const App = () => (
  <HashRouter>
    <Switch>
      <Redirect from="/" exact to="/login/" />

      <Route exact path="/" component={Home} />
      <Route exact path="/admin/exercise-list" component={AdminExerciseList} />
      <Route exact path="/exercise-create" component={ExerciseCreate} />
      <Route exact path="/exercise-list" component={ExerciseList} />
      <Route path="/exercise/:id" component={Exercise} />
      <Route exact path="/error" component={Err} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
    </Switch>
  </HashRouter>
)

export default App
