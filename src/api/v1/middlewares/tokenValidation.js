const express = require('express')
const { body, validationResult } = require('express-validator')
const router = express.Router()
const { User } = require('../models')
const bcrypt = require('bcryptjs')

router.post(
    '/',
    body('email').trim().isEmail().notEmpty(),
    body('password').notEmpty(),
    async(req, res, next) => {
        try {
            const result = validationResult(req)

            if(result['errors'].length) {
                return res.status(400).json({
                    success: false,
                    response: result
                })
            }

            const { email, password } = req.body

            const results = await User.findAll({
                where: {
                    email: email
                }
            })

            if(results.length) {
                let user = results[0]

                const compare = await bcrypt.compare(password, user.password)

                if(!compare) {
                    return res.status(400).json({
                        success: false,
                        response: 'Wrong credentials'
                    })
                }
                next()
            } else {
                return res.status(400).json({
                    success: false,
                    response: 'Wrong credentials'
                })
            }
        } catch (err) {
            return res.status(500).json('There was an error in the application')
        }
    }
)

module.exports = router
