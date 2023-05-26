const db = require('../db')

class UserModel {

    async getAllUsers() {
        return new Promise (resolve => {
            db.query('SELECT * FROM users', (err, results) => {
                if (err) throw err
                resolve(results)
            })
        })
    }

    async createUser(username, email, password) {
        return new Promise (resolve => {
            db.query(`INSERT INTO users (username, email, password) VALUES ('${username}', '${email}', '${password}')`, (err, results) => {
                if(err) throw err
                resolve(results)
            })

        })
    }
}

module.exports = new UserModel()