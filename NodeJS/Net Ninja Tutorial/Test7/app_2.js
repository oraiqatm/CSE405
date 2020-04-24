var http = require('http');
var fs = require('fs');

//made a server and sent info from readMe.txt to server and it is printed to reciever
var server = http.createServer(function(req, res){
    console.log('request was made: ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var myReadStream = fs.createReadStream(__dirname + '/readMe.txt');
    myReadStream.pipe(res);
});

server.listen(3000, '127.0.0.1'); 
console.log('Now listening to port 3000');