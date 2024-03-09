const express = require('express');
const cors = require('cors');
const port = 7777;

var app = express();


app.use(cors);

app.get('/HelloWorld',function (req,res,next) {
    res.json({msg:'HelloWorld'});
});

app.listen(port,function () {
    console.log(`Server listening port: ${port} `);
})