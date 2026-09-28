import mysql from 'mysql2'

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "employeems"
})

con.connect(function(err) {
    if(err) {
        console.log("connection error:", err.code, err.errno, err.sqlMessage || err.message)
    } else {
        console.log("Connected")
    }
})

export default con;
