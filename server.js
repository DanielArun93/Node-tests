const express = require('express');

var app = express();

app.get('/',(req,res) => {
    res.send("Hello World!");
})

app.get('/user',(req,res) => {
    res.send([
        {
            "name":"Arun",
            "age":25
        },
        {
            "name":"Andrew",
            "age":23
        }
    ])
})
app.listen(3000,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Server opened at port 3000");
    }
});

module.exports.app = app;