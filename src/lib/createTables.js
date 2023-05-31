const mysql = require('mysql')
const db = require('../db')

function createTables() {
    const tableCreationQueries = [
        `
        CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            username VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL,
            role VARCHAR(255) NOT NULL
        )
        `
    ]

    tableCreationQueries.forEach(query => {
        db.query(query, (err, result) => {
            if (err) throw err
        })
    })
}

module.exports = createTables
