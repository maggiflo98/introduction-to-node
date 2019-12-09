const  express= require('express');
const bodyParser = require('body-parser');
var hbs=require(' express-handlebars');
var path=require('path');
const app= express();
const port=8000;
const conn=require('./config/db');
const usersRoute=require('./routes/users');
const usersRoute_2=require('./routes/users_2');
const productsRoute=require('./routes/products');

app.use(bodyParser.json());

// const productsRoute=require('./routes/products');
app.use('/users/',usersRoute);
app.use('/users_2/',usersRoute_2);
//  usersRoute(app,conn);
 productsRoute(app,conn);
// middlewares  requests go through middleware if you have a middleware


// 2 arguments / is the path 2nd argument call back function 3 arguments(req, res, next)

 // localhost:3000/
// setup the app objects to the hbs engine
app.set("view engine",hbs);
app.engine('hbs',hbs({
   layoutDirs:__dirname + '/views/layoutes'



}));
app.get('/',function (req,res,next) {
    res.send('welcome to my api');
});

// app.get('/addusers',function (req,res) {
//     var name= "dan";
//     var email= "dan@gmail.com";
//     var password= "pass";
//    var sql="INSERT INTO `users`(`id`, `username`, `email`, `password`) VALUES (NULL,'"+name+"','"+email+"','"+password+"')"
//     conn.query(sql,function (err,results) {
//         if(err){
//             throw err
//         }
//         else {
//             console.log("data added successfully")
//         }
//
//     })
// });
app.listen(port,function () {
    console.log("server running on port 8000");

});