const http = require('http')

server = http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello ');
})

server.listen(3000)