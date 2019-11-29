// using the file system using node
// to add capabilities to node that interacts with the file_system require the_'fs'_module
// common uses f the fs module
// 1.read files
// 2.create files
// 3.update files
// 4.delete files
// // 5.rename files
// how to read files in node
 const http=require('http');
 const fs= require('fs');
  // create_server;
 http.createServer( function( req,res ){
//     fs.readFile('demo_1.html',function (err,data) {
//         res.writeHead(200,{'Content-Type':"text/html"});
//         res.write(data);
//         res.end();
//
//     })


// create file
// 1.fs.appendFile:add/appends comtent to a file if file does not exist create
// 2.fs.open():takes a flas as the second argument if flag is "w" it will  write.
// fs.writeFile:method replaces the specified file and content if it exists.
// append
fs.appendFile('demo_2.html','throw  content to be appended',function (err) {
    if(err){
        throw err;
    }
    else{
        console.log("data saved");
    }

});
fs.open("demo_3.html","w",function (err,file) {
    if(err){
        throw err;
    }else{
        console.log("saved")
    }
    // delete files
    fs.unlink("demo_1.html",function (err) {
        if(err){
            throw err;
        }else{
            console.log("file deleted")

        }

    })
})
}).listen( 8000,function () {
    console.log("server running on port 8000");

});
 //check on write file
// delete a file
// research on url module
// download postman