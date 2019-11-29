// http is a server protocal:rules that govern sending and receiving of  data in a network
// module:js library: js file containing js code
// to use a module use the require() function in your server.js it can be any other file
// Node js comes with BUILD IN MODULES: 1. http
// custom modules:
// 1.create a js file in your project
// 2.write code in it
// 3.require the module
const http= require (
    'http');
const theDate= require('./module_1');
http.createServer( function (req,res)
{
// http header
    res.writeHead(200,{'Content-Type':'text/plain'});
    // writeHead:status,object,object  containing response header
    // res.write("hello world the time is +the date.getdate()
    res.end("hello world the time is " +theDate.getData.getDate());


}).listen(3000,function(){
  console.log("server working")
});
// research on status code
// in terminal if its working node server.js
