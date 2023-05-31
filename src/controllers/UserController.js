const userModel = require('../models/UserModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const fs = require('fs')

module.exports = {
    getAllUsers : async (req, res) => {
        try {
            await userModel.getAllUsers()
        
            res.status(200).json(results)
        } catch (err) {
            res.status(500).json('Internal server error')
        }
    },

    getUserById : async (req, res) => {
        try {
            await userModel.getUserById(req.params.id)
        
            res.status(200).json(results)
        } catch (err) {
            res.status(500).json('Internal server error')
        }
    },

    getUserByEmail : async (req, res) => {
        try {
            await userModel.getUserByEmail(req.params.email)
        
            res.status(200).json(results)
        } catch (err) {
            res.status(500).json('Internal server error')
        }
    },

    createUser : async (req, res) => {
        try {
            const {username, email, password } = req.body
        
            const encryptedPassword = await bcrypt.hash(password, 10)

            await userModel.createUser(username, email, encryptedPassword)

            res.status(200).json('User Created')
        } catch (err) {
            res.status(500).json('Internal server error')
        }

        
    },

    updateUser: async (req, res) => {
        try {
            const {username, email, password } = req.body

            const encryptedPassword = await bcrypt.hash(password, 10)

            await userModel.updateUser(req.params.id, username, email, encryptedPassword)

            res.status(200).json('User Updated')
        } catch (err) {
            res.status(500).json('Internal server error')
        }
    },

    deleteUser: async (req, res) => {
        try {
            await userModel.deleteUser(req.params.id)
        
            res.status(200).json('User Deleted')
        } catch (err) {
            res.status(500).json('Internal server error')
        }
    },

    generateTokenUser: async (req, res) => {
        try {
            const privateKey = fs.readFileSync(process.cwd() + '/private.key')
            
            jwt.sign({email: req.body.email, role: 'admin'}, privateKey, {expiresIn: '24h', algorithm: 'RS256'}, (err, token) => {
                res.json({token: token})
            })
        } catch (err) {
            res.status(500).json('Internal server error')
        }
    }   
}