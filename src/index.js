const express = require('express')
const app = express()
const db = require('./db')

const homeRoute = require('./routes/Home')

app.use('/', homeRoute)

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})