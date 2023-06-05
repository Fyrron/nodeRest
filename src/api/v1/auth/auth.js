const express = require('express')
const router = express.Router()
const fs = require('fs')
const jwt = require('jsonwebtoken')

router.use(
    '/', 
    async (req, res, next) => {
    let token = req.headers['x-acess-token'] || req.headers['authorization'];

    if(token == undefined) {
        return res.status(400).json({
            success: false,
            message: 'User not allowed to access user resource'
        })
    }

    if(token.startsWith('Bearer ')) {
        token = token.slice(7, token.length)
    }

    const privateKey = fs.readFileSync(process.cwd() + '/private.key')

    jwt.verify(token, privateKey, (err, decoded) => {
        if(err) {
            return res.json({
                success: false,
                message: 'User not allowed to access user resource'
            })
        }
        next()
    })
})

module.exports = router