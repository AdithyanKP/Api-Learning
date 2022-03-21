
var express=require("express");
var app=express();
var controllerUser=require('../controllers/controlleruser')
app.use(express.urlencoded({extended:true}));
 app.use(express.json());

app.get("/",(req,res)=>{
    controllerUser.userList().then((users)=>{
        res.send(users)
    })

})
app.post("/add-user",(req,res)=>{
    console.log(req.body);
    
    controllerUser.addUser(req.body).then((users)=>{
        res.send(users)
    })


})

module.exports=app;