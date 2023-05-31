const express = require('express')
const router = express.Router()

const controller = require('../controllers/UserController')

router.get('/', controller.getAllUsers)

router.post('/', controller.createUser)

router.put('/:id', controller.updateUser)

router.get('/:id', controller.getUserById)

router.delete('/:id', controller.deleteUser)

router.get('/email/:email', controller.getUserByEmail)

router.post('/token', controller.generateTokenUser)


module.exports = router