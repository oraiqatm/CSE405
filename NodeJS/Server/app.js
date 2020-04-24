//Tutorial video 12
var http = require('http');
var fs = require('fs');

//Mader server and sending html files to reciever
var server = http.createServer(function(req, res){
    console.log('request was made: ' + req.url);
    if(req.url === '/story' || req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/story.html'). pipe(res);
    }else if(req.url === '/scramble'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/scramble.html'). pipe(res);
    }else{
        res.writeHead(404, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/404.html'). pipe(res);
    }
    
});

server.listen(3000, '127.0.0.1'); 
console.log('Now listening to port 3000');