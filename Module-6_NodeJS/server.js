// const oM = require('./operation');

// console.log(oM.add(5,4));
// console.log(oM.subtract(8,3));

// const sayHello = require('./localModule');
// sayHello("John");

const Square = require('./square')

const MySquare = new Square(3);
console.log(`The area of Square is ${MySquare.area()}`);