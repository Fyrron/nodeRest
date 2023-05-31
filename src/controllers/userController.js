const User = require('../models/UserModel')
const bcrypt = require('bcryptjs')

module.exports = {
    getAllUsers : async (req, res) => {
        try {
            const results = await User.findAll();
            res.status(200).json(results)
        } catch (err) {
            res.status(500).json({
                'success': false,
                'response': 'Internal server error'
            })
        }
    },

    getUserById : async (req, res) => {
        try {
            const results = await User.findAll({
                where: {
                    id: req.params.id
                }
            });
        
            res.status(200).json(results)
        } catch (err) {
            res.status(500).json({
                'success': false,
                'response': 'Internal server error'
            })
        }
    },

    getUserByEmail : async (req, res) => {
        try {
            const results = await User.findAll({
                where: {
                    email: req.params.email
                }
            });

            res.status(200).json(results)
        } catch (err) {
            res.status(500).json({
                'success': false,
                'response': 'Internal server error'
            })
        }
    },

    createUser : async (req, res) => {
        try {
            const {username, email, password } = req.body
        
            const encryptedPassword = await bcrypt.hash(password, 10)

            const results = await User.create({
                username: username,
                email: email,
                password: encryptedPassword
            });

            console.log(results)


            res.status(200).json({
                'success': true,
                'response': 'User Created'
            })
        } catch (err) {
            res.status(500).json({
                'success': false,
                'response': 'Internal server error'
            })
        }
    },

    updateUser: async (req, res) => {
        try {
            const {username, email, password } = req.body

            const encryptedPassword = await bcrypt.hash(password, 10)

            await User.update({
                username: username,
                email: email,
                password: encryptedPassword
            }, {
                where: {
                    id: req.params.id
                }
            });

            res.status(200).json({
                'success': true,
                'response': 'User Updated'
            })
        } catch (err) {
            res.status(500).json({
                'success': false,
                'response': 'Internal server error'
            })
        }
    },

    deleteUser: async (req, res) => {
        try {

            await User.destroy({
                where: {
                    id: req.params.id
                }
            });

            res.status(200).json({
                'success': true,
                'response': 'User Deleted'
            })
        } catch (err) {
            res.status(500).json({
                'success': false,
                'response': 'Internal server error'
            })
        }
    },
}