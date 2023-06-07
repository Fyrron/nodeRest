const router = require('express').Router()
const auth = require('../auth/auth')
const validation = require('../middlewares/userValidation')
const controller = require('../controllers/userController')

router.get('/', [auth, validation, controller.getAllUsers])

router.post('/', [validation, controller.createUser])

router.put('/:id', [auth, validation, controller.updateUser])

router.get('/:id', [auth, validation, controller.getUserById])

router.delete('/:id', [auth, validation, controller.deleteUser])

router.get('/email/:email', [auth, validation, controller.getUserByEmail])

module.exports = router