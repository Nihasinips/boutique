const http = require('http')
const express=require('express')
const app=express()
const path=require('path')
const collection=require('./mongo')
const querystring = require('querystring')


var query;

http.createServer(function (req, res) {

    var data1 = '';

    req.on('data', function (chunk) {

        console.log(chunk);

        data1 += chunk;

    });

    req.on('end', async()=> {
        query = querystring.parse(data1);

        console.log(query);
        const data= {
        fname : (query)["fname"],

        lname : (query)["lname"],

        email : (query)["email"],

        password : (query)["password"],

        city : (query)["city"],

        address : (query)["address"],

        state : (query)["state"],

        pincode : (query)["pincode"],

        mobileno : (query)["mobileno"],

        dress:(query)["dress"],
        
        qty:(query)["qty"],

        size:(query)["size"],

        pay:(query)["pay"],
}
await collection.insertMany([data]);

        res.write("Hi Your details have been registered! ");

        res.end();

    });

}).listen(5555); console.log('Server has Started.......');
