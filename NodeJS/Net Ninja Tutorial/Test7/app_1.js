var http = require('http');
var fs = require('fs');

//Create Read stream inherits from emitter so (utf8 will give the text, but can run without it)
//var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
//Using streams to pass chunks of data through a stream 
var myReadStream = fs.createReadStream(__dirname + '/readMe.txt');
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

/*
myReadStream.on('data', function(chunk){
    console.log('new chunk recieved:');
    myWriteStream.write(chunk);
});
*/
//this is equivalent to the above myReadStream.on
myReadStream.pipe(myWriteStream);