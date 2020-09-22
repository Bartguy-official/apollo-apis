const Sequelize = require("sequelize");
var config = require("../config/keys");

const sequelize = new Sequelize(
  config.mysql.database,
  config.mysql.username,
  config.mysql.password,
  {
    dialect: "mysql",
    host: config.mysql.host,
    query: {
      raw: true,
    },
  }
);

module.exports = sequelize;
