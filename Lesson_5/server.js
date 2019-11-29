const events = require('events');
const eventEmitter =  new events.EventEmitter();
const fs=require('fs')

// create_an_event_handler: Function_that will be called
// d an event occured
 var handler=function (){

    fs.open('demo.html', "w", function(err) {
        if (err) throw err;
        console.log("demo file created")
    })
};
// Assign the event handler to an event
eventEmitter.on("createFile",handler);

eventEmitter.emit("createFile")

// move to the folder lesson 6
// initialize node propackage
// npm init it creates a file
// npm install<name>
// sudo npm i <name of package>-g
// sudo npm i<name --save project you have started with