require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const userRoute = require('./routes/user')
const tokenRoute = require('./routes/token')

app.use('/api', cors())

app.use('/api/token', tokenRoute)

app.use('/api/users', userRoute)

app.listen(process.env.PORT, () => {
    console.log(`Server is up on port ${process.env.PORT}`)
})
