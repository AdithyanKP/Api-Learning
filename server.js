var express=require("express");
var app=express();
var mysql= require("mysql");
var userRouter = require('./routes/user');
const mysqlConnection=require('./Database/connection');

 var cors= require ('cors');

 
 app.use(cors());
app.use('/', userRouter);

app.listen(9000,()=>{
    console.log("server started");

})
module.exports = app;