const express = require('express');
const cors = require('cors');
const mysql = require('mysql2')
require('dotenv').config()


const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
})

const port = 3000;

var app = express();


app.use(cors());

app.get('/HelloWorld',function (req,res,next) {
    res.json({msg:'HelloWorld'});
});

app.get('/attractions', function(req, res, next){
    pool.query("SELECT * FROM user", function(err, rows, fields){
        res.json(rows)
    })
})

app.listen(port,function () {
    console.log(`Server listening port: ${port} `);
})