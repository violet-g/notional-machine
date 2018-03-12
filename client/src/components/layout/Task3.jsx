import React from 'react'
import Task from './Task'
import TaskInstructions from './TaskInstructions'
import CodeFragment from '../fragment/CodeFragment'
import InputTable from './task-3/InputTable'

const Task3 = props => (
  <div className="Task3">
    <Task next={props.next}>
      <TaskInstructions>Step 3: Do step 3.</TaskInstructions>
      <div className="row">
        <div className="col-md-4">
          <InputTable steps={props.data.steps} modelSteps={props.data.model.steps} {...props.input} />
        </div>
        <div className="col-md-4">
          <CodeFragment
            fragment={props.data.exercise.code_fragment}
            expressions={props.data.model.expressions}
            flows={props.data.model.arrows}
            {...props}
          />
        </div>
        <div className="col-md-4">
        </div>
      </div>
    </Task>
  </div>
)

export default Task3
