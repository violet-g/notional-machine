import React from 'react'

const ExerciseList = ({ exercises, onExerciseSelect }) => (
  <div className="ExerciseList">
    <h1>Select exercise</h1>
    <ul>
      {exercises.map(exercise =>
        <li><a onClick={() => onExerciseSelect(exercise.id)}>Exercise #{exercise.id}</a></li>
      )}
    </ul>
  </div>
)

export default ExerciseList
