const express = require('express')
const app = express()
const db = require('./db')
const createTables = require('./lib/createTables')
const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


//creating tables if they don't exist
createTables()

const homeRoute = require('./routes/Home')
const vacationsRoute = require('./routes/Vacations')
const userRoute = require('./routes/User')

//using cors to permit Cross-Origin Resource Sharing
app.use('/api', cors())

//importing routes
app.use('/', homeRoute)
app.use('/api/vacations', vacationsRoute)
app.use('/api/users', userRoute)


app.listen(3000, () => {
    console.log('Server is up on port 4000.')
})