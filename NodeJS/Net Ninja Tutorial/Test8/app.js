//Tutorial video 12
var http = require('http');
var fs = require('fs');

//Mader server and sending html files to reciever
var server = http.createServer(function(req, res){
    console.log('request was made: ' + req.url);
    res.writeHead(200, {'Content-Type': 'application/json'});
    var myObj = {
        name: 'Ryu',
        job: 'Ninja',
        age: 29
    };
    //requires a string or buffer
    res.end(JSON.stringify(myObj), (err)=>{});
});

server.listen(3000, '127.0.0.1'); 
console.log('Now listening to port 3000');