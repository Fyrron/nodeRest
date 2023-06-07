const router = require('express').Router()
const validation = require('../middlewares/tokenValidation')
const controller = require('../controllers/tokenController')

router.post('/', [validation, controller.generateTokenUser])

module.exports = router