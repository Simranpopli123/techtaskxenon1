const express= require('express')
const app = express()
const bodyParser = require('body-parser')
const path=require("path")
const templatepath=path.join(__dirname,'./tempelates')
var cons = require('consolidate');
const router=require('./router/routes')
const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:127.0.0.1:27017/xeno')
try{
    console.log("mongodb connected")
}catch(err){
    console.log(err)
}

app.use(express.json())
app.use('/public',express.static("public"));
app.use(express.urlencoded({extended:false}))
app.engine('html', cons.swig)
app.set("view engine","html")
app.set("views",templatepath)
app.use(bodyParser.json())
app.use(router)

app.get("/",(req,res)=>{
    res.render("base") //homee
})
app.get("/signup",(req,res)=>{
    res.render("signup")
})
app.get("/login",(req,res)=>{
   res.render("login")
})

app.get("/contact",(req,res)=>{
    res.render("contactUS")
})

app.listen(2000,()=>{
    console.log("port connected at 2000")
    
})