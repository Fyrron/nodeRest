const fs = require('fs')

module.exports = {
  development: {
    "username": "test",
    "password": "123123",
    "database": "node",
    "host": "db",
    "dialect": "mysql",
    "seederStorage": "sequelize",
    "seederStorageTableName": "SequelizeData"
  },
  test: {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": process.env.DB_HOST,
    "dialect": "mysql"
  },
  production: {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": process.env.DB_HOST,
    "dialect": "mysql"
  }
}
