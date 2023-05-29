const userModel = require('../models/UserModel')

module.exports = {
    getAllUsers : (req, res) => {
        userModel.getAllUsers()
        .then(results => {
            res.json(results)
        })
        .catch(err => {
            res.status(500).json('There was an error in application')
        })
    },

    getUserById : (req, res) => {
        userModel.getUserById(req.params.id)
        .then(results => {
            res.json(results)
        })
        .catch(err => {
            res.status(500).json('There was an error in application')
        })
    },

    getUserByEmail : (req, res) => {
        userModel.getUserByEmail(req.params.email)
        .then(results => {
            res.json(results)
        })
        .catch(err => {
            res.status(500).json('There was an error in application')
        })
    },

    createUser : (req, res) => {
        const {username, email, password } = req.body
        userModel.createUser(username, email, password)
        .then(results => {
            res.status(200).json('User Created')
        })
        .catch(err => {
            res.status(500).json('There was an error in application')
        })
    },

    updateUser: (req, res) => {
        const {username, email, password } = req.body
        userModel.updateUser(req.params.id, username, email, password)
        .then(results => {
            res.status(200).json('User Updated')
        })
        .catch(err => {
            res.status(500).json(err)
        })
    },

    deleteUser: (req, res) => {
        userModel.deleteUser(req.params.id)
        .then(results => {
            res.status(200).json('User Deleted')
        })
        .catch(err => {
            res.status(500).json('There was an error in application')
        })
    }
}