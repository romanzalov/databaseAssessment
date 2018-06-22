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

module.exports = Project;