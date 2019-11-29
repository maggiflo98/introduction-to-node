const  express= require('express');
const app= express();
const port=3000
const usersRoute=require('./routes/users');


// middlewares  requests go through middleware if you have a middleware
app.use('/api/users',usersRoute);


// 2 arguments / is the path 2nd argument call back function 3 arguments(req, res, next)


app.get('/',function (req,res,next) {
    res.send('welcome to my api');
});


app.listen(port,function () {
    console.log("server running on port 3000");

});