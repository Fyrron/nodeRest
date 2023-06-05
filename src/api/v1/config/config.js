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
    "username": "test",
    "password": "123123",
    "database": "node",
    "host": "db",
    "dialect": "mysql",
    "seederStorage": "sequelize",
    "seederStorageTableName": "SequelizeData"
  },
  production: {
    "username": "test",
    "password": "123123",
    "database": "node",
    "host": "db",
    "dialect": "mysql",
    "seederStorage": "sequelize",
    "seederStorageTableName": "SequelizeData"
  }
}
