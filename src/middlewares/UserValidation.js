const express = require('express')
const { body, param, validationResult } = require('express-validator')
const router = express.Router()
const userModel = require('../models/UserModel')
const bcrypt = require('bcryptjs')

router.post(
    '/$',
    body('username').trim().notEmpty().isString(),
    body('email').isEmail().trim().notEmpty(),
    body('password').notEmpty(),
    async (req, res, next) => {
        const result = validationResult(req)
        
        if(result['errors'].length) {
            return res.status(400).json(result)
        }

        try {
            const results = await userModel.getUserByEmail(req.body.email)

            if(results.length) {
                return res.status(400).json('An user with this email already exists')
            }

            next()
        } catch (err) {
            return res.status(500).json('There was an error in the application')
        }
    }
)

router.get(
    '/email/:email',
    param('email').trim().isEmail(),
    async (req, res, next) => {
        const result = validationResult(req)

        if(result['errors'].length) {
            return res.status(400).json(result)
        }
        try {
            const results = await userModel.getUserByEmail(req.params.email)

            if(!results.length) {
                return res.status(400).json('Email does not exist')
            }

            next()
        } catch (err) {
            return res.status(500).json('There was an error in the application')
        }
    }
)

router.get(
    '/:id$',
    param('id').trim().isInt(),
    async (req, res, next) => {
        const result = validationResult(req)

        if(result['errors'].length) {
            return res.status(400).json(result)
        }

        try {
            const results = await userModel.getUserById(req.params.id)

            if(!results.length) {
                return res.status(400).json('ID does not exist')
            }

            next()
        } catch (err) {
            return res.status(500).json('There was an error in the application')
        }
    }
)

router.put(
    '/:id$',
    body('username').trim().isString().notEmpty(),
    body('email').trim().isEmail().notEmpty(),
    body('password').notEmpty(),
    async (req, res, next) => {
        const result = validationResult(req)

        if(result['errors'].length) {
            return res.status(400).json(result)
        }

        try {
            const results = await userModel.getUserByEmail(req.body.email)

            if(results.length) {
                if(results[0].id != req.params.id) {
                    return res.status(400).json('There is an user with that email')
                }
            }

            next()
        } catch (err) {
            return res.status(500).json('There was an error in the application')
        }
    }
)

router.post(
    '/token',
    body('email').trim().isEmail().notEmpty(),
    body('password').notEmpty(),
    async(req, res, next) => {
        try {
            const result = validationResult(req)

            if(result['error'].length) {
                return res.status(400).json({
                    success: false,
                    response: result
                })
            }

            const { email, password } = req.body

            const results = await userModel.getUserByEmail(email)

            if(results.length) {
                let user = results[0]

                const encryptedPassword = await bcrypt.hash(password, 10)

                if(user.password != encryptedPassword) {
                    return res.status(400).json({
                        success: false,
                        response: 'The password is wrong'
                    })
                }

                next()
            }

            return res.status(400).json({
                success: false,
                response: 'No user with that email'
            })
        } catch (err) {
            return res.status(500).json('There was an error in the application')
        }
    }
)



module.exports = router
