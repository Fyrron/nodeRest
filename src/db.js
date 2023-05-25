const mysql = require('mysql2')

let con = mysql.createConnection({
    host: "db",
    user: "test",
    password: "123123",
    database: "node"
})

con.connect(function(err) {
    if(err) throw err
    console.log("Connected!")
})

module.exports = con