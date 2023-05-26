const userModel = require('../models/UserModel')

module.exports = {
    getAllUsers : (req, res) => {
        userModel.getAllUsers()
        .then(results => {
            res.json(results)
        })
        .catch(err => {
            console.log(err)
        
        })
    },

    createUser : (req, res) => {
        const {username, email, password } = req.body
        userModel.createUser(username, email, password)
        .then(results => {
            res.json('User Created')
        })
        .catch(err => {
            res.json('There was an error processing your request: ' + err)
        })
    }
}