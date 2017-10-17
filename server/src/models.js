const Sequelize = require('sequelize')

const sequelize = new Sequelize('notional-machine-db', null, null, {
  dialect: 'sqlite',
  storage: './notional-machine-db.sqlite'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const Pupil = sequelize.define('pupil', {
  username: { type: Sequelize.STRING },
  password: { type: Sequelize.STRING }
});

const Exercise = sequelize.define('exercise', {
  title: { type: Sequelize.STRING }
});

Pupil.sync()
Exercise.sync()

module.exports = {
  Pupil,
  Exercise
}
