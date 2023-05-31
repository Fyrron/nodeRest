require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const db = require('./db')
const createTables = require('./lib/createTables')
const userValidation = require('./middlewares/UserValidation')
const auth = require('./auth/auth')


createTables()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const userRoute = require('./routes/User')

app.use('/api', cors())
app.use('/api', auth)


app.use('/api/users', userValidation)
app.use('/api/users', userRoute)

app.listen(3000, () => {
    console.log('Server is up on port 4000.')
})