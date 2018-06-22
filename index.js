const Sequelize = require("sequelize");
const moment = require('moment');
import "./DJIA.CSV"

const sequelize = new Sequelize('database', 'username', 'password', {
  dialect: 'mssql'
})


const Project = sequelize.define("project", {
  date: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  price: {
    type: Sequelize.NUMBER,
    allowNull: false,
  },

  instanceMethods: {
    day: () => {
      const x = moment().weekday();
      return x;
    },
    week: () => {
      const y = moment().week();
      return y;
    },
    roundUp: (num) => {
      const up = Math.ceil(num / 1000) * 1000;
      return up;
    },
    roundDown = (num) => {
      const down = Math.floor(num / 1000) * 1000;
      return down;
    },
  }
});

//Question 1
Project.query("SELECT AVG(price) FROM date WHERE YEAR(happened_at) = 2013", { type: sequelize.QueryTypes.SELECT })
  .then(data => {
    console.log(data)
  })

Project.query("SELECT AVG(price) FROM date WHERE YEAR(happened_at) = 2014", { type: sequelize.QueryTypes.SELECT })
  .then(data => {
    console.log(data)
  })

Project.query("SELECT AVG(price) FROM date WHERE YEAR(happened_at) = 2015", { type: sequelize.QueryTypes.SELECT })
  .then(data => {
    console.log(data)
  })
Project.query("SELECT AVG(price) FROM date WHERE YEAR(happened_at) = 2016", { type: sequelize.QueryTypes.SELECT })
  .then(data => {
    console.log(data)
  })
Project.query("SELECT AVG(price) FROM date WHERE YEAR(happened_at) = 2017", { type: sequelize.QueryTypes.SELECT })
  .then(data => {
    console.log(data)
  })
Project.query("SELECT AVG(price) FROM date WHERE YEAR(happened_at) = 2018", { type: sequelize.QueryTypes.SELECT })
  .then(data => {
    console.log(data)
  })

// Question 2

Project.query("SELECT AVG(price) FROM date WHERE MONTH(happened_at) = 1", { type: sequelize.QueryTypes.SELECT })
  .then(data => {
    console.log(data)
  })
Project.query("SELECT AVG(price) FROM date WHERE MONTH(happened_at) = 2", { type: sequelize.QueryTypes.SELECT })
  .then(data => {
    console.log(data)
  })
Project.query("SELECT AVG(price) FROM date WHERE MONTH(happened_at) = 3", { type: sequelize.QueryTypes.SELECT })
  .then(data => {
    console.log(data)
  })
Project.query("SELECT AVG(price) FROM date WHERE MONTH(happened_at) = 4", { type: sequelize.QueryTypes.SELECT })
  .then(data => {
    console.log(data)
  })
Project.query("SELECT AVG(price) FROM date WHERE MONTH(happened_at) = 5", { type: sequelize.QueryTypes.SELECT })
  .then(data => {
    console.log(data)
  })
Project.query("SELECT AVG(price) FROM date WHERE MONTH(happened_at) = 6", { type: sequelize.QueryTypes.SELECT })
  .then(data => {
    console.log(data)
  })
Project.query("SELECT AVG(price) FROM date WHERE MONTH(happened_at) = 7", { type: sequelize.QueryTypes.SELECT })
  .then(data => {
    console.log(data)
  })
Project.query("SELECT AVG(price) FROM date WHERE MONTH(happened_at) = 8", { type: sequelize.QueryTypes.SELECT })
  .then(data => {
    console.log(data)
  })
Project.query("SELECT AVG(price) FROM date WHERE MONTH(happened_at) = 9", { type: sequelize.QueryTypes.SELECT })
  .then(data => {
    console.log(data)
  })
Project.query("SELECT AVG(price) FROM date WHERE MONTH(happened_at) = 10", { type: sequelize.QueryTypes.SELECT })
  .then(data => {
    console.log(data)
  })
Project.query("SELECT AVG(price) FROM date WHERE MONTH(happened_at) = 11", { type: sequelize.QueryTypes.SELECT })
  .then(data => {
    console.log(data)
  })
Project.query("SELECT AVG(price) FROM date WHERE MONTH(happened_at) = 12", { type: sequelize.QueryTypes.SELECT })
  .then(data => {
    console.log(data)
  })


module.exports = Project;
