const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.on('greet', () =>{
    console.log('Hello, Nodejs!')
})

myEmitter.emit('greet')

