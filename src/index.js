require('dotenv').config()
const express = require('express')
const app = express()
const db = require('./db')
const cors = require('cors')
const createTables = require('./lib/createTables')

createTables()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const userRoute = require('./routes/user')
const tokenRoute = require('./routes/token')

const userValidation = require('./middlewares/userValidation')
const tokenValidation = require('./middlewares/tokenValidation')

const auth = require('./auth/auth')

app.use('/api', cors())

app.use('/api/token', tokenValidation)
app.use('/api/token', tokenRoute)

app.use('/api/users', auth)
app.use('/api/users', userValidation)
app.use('/api/users', userRoute)

app.listen(3000, () => {
    console.log('Server is up on port 4000.')
})