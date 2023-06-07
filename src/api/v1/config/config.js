require('dotenv').config()

module.exports = {
  development: {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": process.env.DB_HOST,
    "dialect": "mysql",
    "seederStorage": "sequelize",
    "seederStorageTableName": "SequelizeData"
  },
  test: {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": process.env.DB_HOST,
    "dialect": "mysql",
    "seederStorage": "sequelize",
    "seederStorageTableName": "SequelizeData"
  },
  production: {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": process.env.DB_HOST,
    "dialect": "mysql",
    "seederStorage": "sequelize",
    "seederStorageTableName": "SequelizeData"
  }
}
