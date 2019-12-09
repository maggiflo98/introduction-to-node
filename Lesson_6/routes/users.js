var express= require('express');
var router=express.Router();
const db = require('../config/db');

// users=function (app,db) {
    // http://localhost:8000/users

    router.post('/users', function (req, res, next) {

        // 1.       //posting data to store into the database
        var username = req.body.username;
        var email = req.body.email;
        var password = req.body.password;


        var data = req.body;
        console.log(data);


        // sql query for inserting data into the database
        var sql = "INSERT INTO `users`(`id`, `username`, `email`, `password`) VALUES (NULL,'" + username + "','" + email + "','" + password + "')";

        // add data into the database
        db.query(sql, function (err, result) {
            // if there was an error we handle
            if (err)
                throw err;
            else
                console.log("record added successfully")


        })
        // res.send("hello users");
        // res.end()

    });

// localhost:8000/users/1
//     2.getting  a single user
             router.get('/users/:id', function (req, res) {
        // get the id of the user
                 var user_id = req.params.id;
                  console.log(user_id)

        // get sql query for selecting the data from the above id(user_id)
        var sql = "SELECT `id`, `username`, `email`, `password` FROM `users` WHERE id='" + user_id + "'";

        // get the user
        db.query(sql, function (err, found_user) {
            if (err) {
                throw err;
            } else {
                // output on postman
                res.send(found_user)
            }

        });
        // console.log(user_id)
        // res.send("req.params.id");
        // res.end()

    });
// 3.getting data from all users
    router.get('/', function (req, res) {


        // get sql query for all users
        var sql = "SELECT * FROM `users`";

        // instruction to select all users
        db.query(sql, function (err, found_users) {
            if (err) {
                throw err;
            } else {
                res.send(found_users);
            }

        });
    });
    // localhost:3000/users/1/flo
    router.get('/users/:id/:username', function (req, res) {
        var user_id = req.params.id;
        var username = req.params.username;
        console.log(user_id, username)

    });


// 4.to update
    router.put('/users/:id', function (req, res) {
        // get id of user that needs to be updated
        var user_id = req.params.id;

        //grab new data
        var username = req.body.username;
        var email = req.body.email;
        var password = req.body.password;

        // sql for updating
        var sql = "UPDATE `users` SET `username`='" + username + "',`email`='" + email + "',`password`='" + password + "' WHERE id='" + user_id + "'";
        // query the db
        db.query(sql, function (err, result) {
            if (err) {
                throw err;
            } else {
                res.send("message" + result);
            }

        })
    });

   // delete

    router.delete('/users/:id', function (req, res) {
        // get id of user that needs to be updated
        var user_id = req.params.id;

        // we dont need the body
        // var username = req.body.username;
        // var email = req.body.email;
        // var password = req.body.password;

        // sql for deleting
        var sql = "DELETE FROM `users` WHERE id='"+user_id+"'";

        // query the db
        db.query(sql, function (err, result) {
            if (err) {
                throw err;
            } else {
                res.send("message" + result);
            }

        })
     });


// route
// how to add frontend
// authentication




















// };
module.exports=router;
// to run server sudo space /opt/lampp/lampp  start
// start is to start the server restart to restarts stop to stops

// assingnement
// select all users
// install postman