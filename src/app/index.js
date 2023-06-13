const express = require('express')
const app = express()

app.listen(process.env.PORT, () => {
    console.log(`App up and running on port ${process.env.PORT}`)
})