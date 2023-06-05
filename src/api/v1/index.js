require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const userRoute = require('./routes/user')
const tokenRoute = require('./routes/token')

const userValidation = require('./middlewares/userValidation')
const tokenValidation = require('./middlewares/tokenValidation')

const auth = require('./auth/auth')

app.use('/api', cors())

app.use('/api/token', [tokenValidation, tokenRoute])

app.use('/api/users', [auth, userValidation, userRoute])

module.exports = app