const userModel = require('../models/UserModel')

module.exports = {
    getAllUsers : (req, res) => {
        const users = [
            {id: 1, name: 'test1'},
            {id: 2, name: 'test2'},
            {id: 3, name: 'test3'},
        ]
        res.json(users)
    }
}