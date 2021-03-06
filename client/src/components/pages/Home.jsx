import React from 'react'
import { Link } from 'react-router-dom'

/** Home page - currently not used **/
const Home = () => (
  <div>
    <ul>
      <li><Link to='/exercise-create'>Create Exercise</Link></li>
      <li><Link to='/exercise-list'>Exercises</Link></li>
      <li><Link to='/signup'>Sign up</Link></li>
      <li><Link to='/login'>Log in</Link></li>
    </ul>
  </div>
)

export default Home
