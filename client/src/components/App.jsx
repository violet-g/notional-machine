import React from 'react'
import Task1 from './stage/Task1'
import Task2 from './stage/Task2'

const fragment = [
  { indent: 0, tokens: ['a', '=', '0'] },
  { indent: 0, tokens: ['while', 'a', '<', '3'] },
  { indent: 1, tokens: ['print', 'a'] },
  { indent: 1, tokens: ['a', '=', 'a', '+', '1'] },
  { indent: 0, tokens: ['print', 'a'] }
]

const App = () => (
  <div>
    <Task1 fragment={fragment} />
    <Task2 fragment={fragment} />
  </div>
)

export default App
