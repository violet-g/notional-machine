const Sequelize = require('sequelize')

const sequelize = new Sequelize('notional-machine-db', null, null, {
  dialect: 'sqlite',
  storage: './notional-machine-db.sqlite'
})

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  })

const Pupil = sequelize.define('pupil', {
  username: { type: Sequelize.STRING },
  password: { type: Sequelize.STRING }
})

const Exercise = sequelize.define('exercise', {
  code_fragment: { type: Sequelize.TEXT }
})

const Solution = sequelize.define('solution', {
  exercise_ID: { type: Sequelize.INTEGER },
  pupil_ID: { type: Sequelize.INTEGER },
})

const Step = sequelize.define('step', {
  number: { type: Sequelize.INTEGER },
  output: { type: Sequelize.STRING },
  input: { type: Sequelize.STRING },
  expr_eval: { type: Sequelize.STRING },
  solution_ID: { type: Sequelize.STRING }
})

const Arrow = sequelize.define('arrow', {
  start_row: { type: Sequelize.INTEGER },
  end_row: { type: Sequelize.INTEGER },
  step_ID: { type: Sequelize.INTEGER }
})

const Variable = sequelize.define('variable', {
  name: { type: Sequelize.STRING },
  value: { type: Sequelize.STRING },
  step_ID: { type: Sequelize.STRING }
})

const Expression = sequelize.define('expression', {
  line: { type: Sequelize.INTEGER },
  start_pos: { type: Sequelize.INTEGER },
  end_pos: { type: Sequelize.INTEGER },
  solution_ID: { type: Sequelize.INTEGER }
})

Pupil.sync()
Exercise.sync()
Solution.sync()
Step.sync()
Arrow.sync()
Variable.sync()
Expression.sync()

module.exports = {
  Pupil,
  Exercise,
  Solution,
  Step,
  Arrow,
  Variable,
  Expression
}
