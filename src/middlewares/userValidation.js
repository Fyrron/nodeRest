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
                return res.status(400).json({
                    'success': false,
                    'response': 'An user with this email already exists'
                })
            }

            next()
        } catch (err) {
            return res.status(500).json({
                'success': false,
                'response': 'Internal server error'
            })
        }
    }
)

router.get(
    '/email/:email',
    param('email').trim().isEmail(),
    async (req, res, next) => {
        const result = validationResult(req)

        if(result['errors'].length) {
            return res.status(400).json({
                'success': false,
                'response': result
            })
        }
        try {
            const results = await userModel.getUserByEmail(req.params.email)

            if(!results.length) {
                return res.status(400).json({
                    'success': false,
                    'response': 'Email does not exist'
                })
            }

            next()
        } catch (err) {
            return res.status(500).json({
                'success': false,
                'response': 'Internal server error'
            })
        }
    }
)

router.get(
    '/:id$',
    param('id').trim().isInt(),
    async (req, res, next) => {
        const result = validationResult(req)

        if(result['errors'].length) {
            return res.status(400).json({
                'success': false,
                'response': result
            })
        }

        try {
            const results = await userModel.getUserById(req.params.id)

            if(!results.length) {
                return res.status(400).json({
                    'success': false,
                    'response': 'ID does not exist'
                })
            }

            next()
        } catch (err) {
            return res.status(500).json({
                'success': false,
                'response': 'Internal server error'
            })
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
            return res.status(400).json({
                'success': false,
                'response': result
            })
        }

        try {
            const results = await userModel.getUserByEmail(req.body.email)

            if(results.length) {
                if(results[0].id != req.params.id) {
                    return res.status(400).json({
                        'success': false,
                        'response': 'There is an user with that email'
                    })
                }
            }

            next()
        } catch (err) {
            return res.status(500).json({
                'success': false,
                'response': 'Internal server error'
            })
        }
    }
)

module.exports = router
