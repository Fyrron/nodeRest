const app = require('./api/v1/index')

app.listen(process.env.SERVER_PORT, () => {
    console.log('Server is up on port 4000.')
})
