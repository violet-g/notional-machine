import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Task from '../layout/Task'

// Tasks
import Task1 from './tasks/Task1'
import Task2 from './tasks/Task2'
import Task3 from './tasks/Task3'

// Solutions
import Task1Solution from './tasks/solutions/Task1'
import Task2Solution from './tasks/solutions/Task2'
import Task3Solution from './tasks/solutions/Task3'

// Admin
import Task1Admin from './tasks/admin/Task1'
import Task2Admin from './tasks/admin/Task2'
import Task3Admin from './tasks/admin/Task3'

const Exercise = ({ match }) => (
  <Switch>
    <Redirect from={'/exercise/' + match.params.id} exact to={'/exercise/' + match.params.id + '/task/1'} />

    <Route exact path="/exercise/:id/task/1" component={Task1} />
    <Route exact path="/exercise/:id/task/2" component={Task2} />
    <Route exact path="/exercise/:id/task/3" component={Task3} />

    <Route exact path="/exercise/:id/task/1/solution" component={Task1Solution} />
    <Route exact path="/exercise/:id/task/2/solution" component={Task2Solution} />
    <Route exact path="/exercise/:id/task/3/solution" component={Task3Solution} />

    <Route exact path="/exercise/:id/task/1/admin" component={Task1Admin} />
    <Route exact path="/exercise/:id/task/2/admin" component={Task2Admin} />
    <Route exact path="/exercise/:id/task/3/admin" component={Task3Admin} />
  </Switch>
)

export default Exercise
