import React from 'react'
import Task from './Task'
import TaskInstructions from './TaskInstructions'
import CodeFragment from '../fragment/CodeFragment'
import InputTable from './task-3/InputTable'
import ExpressionEvaluation from './task-3/ExpressionEvaluation'

const Task3Layout = props => (
  <div className="Task3">
    <Task next={props.next}>
      <TaskInstructions>
        <p>Step 3: Execute the program code</p>
        <p>Hint: Click on the arrows consecutively to illustrate which line will be executed next. Then execute it by using the visual aids on the left and right of the program code.</p>
      </TaskInstructions>
      <div className="row">
        <div className="col-md-4">
          <InputTable steps={props.data.steps} modelSteps={props.data.model.steps} {...props.input} />
          <ExpressionEvaluation />
        </div>
        <div className="col-md-4">
          <CodeFragment
            fragment={props.data.exercise.code_fragment}
            expressions={props.data.model.expressions}
            flows={props.data.model.arrows}
            {...props}
          />
          <div className="Task3Undo">
            <button className="btn btn-outline-secondary" type="submit">
              Undo
            </button>&nbsp;
            <button className="btn btn-outline-secondary" type="submit">
              Refresh
            </button>
          </div>
        </div>
        <div className="col-md-4">
          {props.rightCol}
        </div>
      </div>
    </Task>
  </div>
)

export default Task3Layout
