var fs = require('fs');
var rs = fs.createReadStream('./example.txt');
rs.on('open', function (){
    console.log('This file is open')
});