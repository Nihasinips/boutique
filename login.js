const http = require('http')
const express=require('express')
const app = express()
const path=require('path')
const collection=require('./mongo2')
const querystring = require('querystring')

var query;

http.createServer(function (req, res) {

    var data1 = '';

    req.on('data', function (chunk) {

        console.log(chunk);

        data1 += chunk;

    });
// 
    req.on('end', async ()=> {
        query = querystring.parse(data1);

        console.log(query);
        const data={
            email: (query)['email'],

            pass : (query)['pass'],
    
          
        }
await collection.insertMany([data]);
         res.write("Your signup details have been recorded!!!");
         res.end();
    });
}).listen(4000);
console.log('server started.....');