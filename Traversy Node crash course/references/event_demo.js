const EventEmitter = require("events");

//create class
class MyEmitter extends EventEmitter {}

//init object
const myEmitter = new MyEmitter();

//set event listener
myEmitter.on("event", () => console.log("event is a GO"));

//init event
myEmitter.emit("event");
