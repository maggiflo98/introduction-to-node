const express=require('express');
const app= express();
module.exports=function () {




    app.get('/login/',function (req,res,next) {
        res.send("login here")

    });



    app.get('/signup/',function (req,res,next) {
        res.send("sign up ")

    });


};