const router = require('express').Router()
const home = require('../public/home')

router.get('/', res.send(home.root.render(<Hello />)))