const express = require('express')
const router = express.Router()

const controller = require('../controllers/UserController')

router.get('/', controller.getAllUsers)

router.post('/create', controller.createUser)

module.exports = router