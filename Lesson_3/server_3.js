const http=require("http");
const url=require('url');
http.createServer(function (req,res)
{

    res.writeHead(200,{'Content-Type':'text/plain'});
    var x=url.parse(req.url,true).query;
    var text= " your name is "+x.name + " " +"your password is "+ x.password + " "+ x.email;
    res.end(text);
}).listen(3002,function(){
    console.log("server running on port 3002")
});