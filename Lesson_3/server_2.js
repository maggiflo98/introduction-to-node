const http= require("http");
const url= require('url');
http.createServer(function (req,res)
{
    res.writeHead(200, {'Content-Type':'text/html'});
    // parsing the url
    var q= url.parse(req.url,true).query;
    // http://localhost:3000/?name-jsDev&country=Kenya
    var text=q.name + " " + q.country;
    res.end(text);
}).listen(3001,function () {
  console.log("server running on port 3001") ;
});
// create a custom module that uses the server to get access to email/password/name
const http=require("http");
const url=require('url');
http.createServer(function (req,res)
{

    res.writeHead(200,{'Content-Type':'text/plain'});
    var x=url.parse(req.url,true).query;
    var text=x.name + " " + x.password + " "+ x.email;
    res.end(text);
}).listen(3002,function(){
    console.log("server running on port 3002")
});