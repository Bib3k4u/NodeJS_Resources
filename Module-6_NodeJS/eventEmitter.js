const EventEmitter = require('events');
class MyEmitter extends EventEmitter{}

const myEmitter = new MyEmitter();

myEmitter.on('customEvent', (arg) =>{
    console.log('Event recieved with argument: ', arg);
});

myEmitter.emit('customEvent', 'Hello, Nodejs!');