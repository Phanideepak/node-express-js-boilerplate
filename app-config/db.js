const mysql = require('mysql2')
const dotenv = require('dotenv')

dotenv.config();

const db = mysql.createPool({
    host : process.env.MYSQL_HOST,
    user : process.env.MYSQL_USER,
    port: 3306,
    password : process.env.MYSQL_PASSWORD,
    database : process.env.MYSQL_DATABASE
})

module.exports = db;