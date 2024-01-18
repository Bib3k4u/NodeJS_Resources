var events = require('events');
var eventEmitter = new events.EventEmitter();

//create an event handler

var myEventHnadler = function () {
    console.log('I can hear scream')
}

// assign the event handler to an event
eventEmitter.on('scream', myEventHnadler);

//fire the 'scream' event

eventEmitter.emit('scream')