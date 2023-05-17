const express = require("express");
const mongoose=require("mongoose");
const app= express();
mongoose.connect("mongodb://localhost:27017/bookings",{
    useNewUrlParser: true,
  useUnifiedTopology: true,
  family:4
})
.then(()=>{
    console.log("connected");  
})
.catch(()=>{
    console.log(Error);
})
const logindesgin=new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    pincode:{
        type:Number,
        required:true
    },
    mobileno:{
        type:Number,
        required:true
    },
    dress:{
        type:String,
        required:true
    },
    qty:{
        type:Number,
        required:true
    },
    size:{
        type:String,
        required:true
    },
    pay:{
        type:String,
        required:true
    },
});
const collection = new mongoose.model("forms",logindesgin);
module.exports=collection;