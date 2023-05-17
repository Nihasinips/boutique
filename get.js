http=require("http")

url=require("url")

qs=require("querystring")

function onRequest(request,response)

{ var path=url.parse(request.url).pathname;

console.log("Request for " + path + "received");

var query = url.parse(request.url).query;

var email=qs.parse(query)["email"];

var pass=qs.parse(query)["pass"];

response.write("Hello "+email+" We received your details");

response.end();

} http.createServer(onRequest).listen(3300);

console.log("server has started");