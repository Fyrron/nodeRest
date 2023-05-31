const express = require('express')
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

    async getUserById(id) {
        return new Promise (resolve => {
            db.query(`SELECT * FROM users WHERE id = ${id}`, (err, results) => {
                if(err) throw err
                resolve(results)
            })
        })
    }

    async getUserByEmail(email) {
        return new Promise (resolve => {
            db.query(`SELECT * FROM users WHERE email = '${email}'`, (err, results) => {
                if(err) throw err
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

    async updateUser(id, username, email, password) {
        return new Promise (resolve => {
            db.query(`UPDATE users SET username = '${username}', email = '${email}', password = '${password}' WHERE id = ${id}`, (err, results) => {
                if(err) throw err
                resolve(results)
            })
        })
    }

    async deleteUser(id) {
        return new Promise (resolve => {
            db.query(`DELETE FROM users WHERE id = ${id}`, (err, results) => {
                if(err) throw err
                resolve(results)
            })
        })
    }
}

module.exports = new UserModel()