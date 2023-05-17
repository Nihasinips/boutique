const express = require("express");
const mongoose=require("mongoose");
const app= express();
mongoose.connect("mongodb://localhost:27017/signup_form",{
    useNewUrlParser: true,
  useUnifiedTopology: true,
  family:4
})
.then(()=>{
    console.log("db connected");  
})
.catch(()=>{
    console.log(Error);
})
const logindesgin=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    pass:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
});
const collection = new mongoose.model("user_details",logindesgin);
module.exports=collection;