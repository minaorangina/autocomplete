var http = require('http');
var port = process.env.PORT || 3000;
var ac = require('./index.js');
var fs = require('fs');
var index = fs.readFileSync(__dirname + "/index.html");
// console.log(index.toString());
http.createServer(function handler(request, response){
  console.log(request.url);
  var url = request.url;
  if (url.length === 1){ // if no particular page was requested
    response.writeHead(200, {"Content-Type": "text/html"}); //writeHead creates a header (metainfo) 200 = statusOK w/ http status codes
    return response.end(index.toString()); // close connection and give client resource it requested
  }
  else {
    response.end('hello world!');
  }


}).listen(port);

console.log("listening on localhost:" + port);
