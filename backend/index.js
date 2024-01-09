const express = require("express")
const mysql = require("mysql")
const cors = require("cors")
require("dotenv").config()
const app = express()

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME 
})
app.use(cors())
app.get("/", (req, res) => {
    res.json("This is backend")
})

app.get("/coffees", (req, res) => {
    const query = "SELECT * FROM coffees"
    db.query(query, (error, data) => {
        if(error){return res.json(error)}
        return res.json(data)
    })
})

app.get("/reviews", (req, res) => {
    const query = "SELECT * FROM reviews"
    db.query(query, (error, data) => {
        if(error){return res.json(error)}
        return res.json(data)
    })
})

app.listen(process.env.PORT || 3000, () => {
    console.log("Server initialized port 3000");
})