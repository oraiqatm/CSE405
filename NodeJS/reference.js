var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.set('port', (process.env.PORT || 3000));


io.on('connection', function(socket){
    console.log('Socket running: ');
})


http.listen(app.get('port'), function(){
    console.log('listening on :' + app.get('port'));
})