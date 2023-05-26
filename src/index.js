const express = require('express')
const app = express()
const db = require('./db')
const createTables = require('./lib/createTables')
const cors = require('cors')

createTables()

const homeRoute = require('./routes/Home')
const vacationsRoute = require('./routes/Vacations')

app.use('/api', cors())
app.use('/', homeRoute)
app.use('/api/vacations', vacationsRoute)


app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})