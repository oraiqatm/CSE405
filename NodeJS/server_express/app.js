var express = require('express');

var app = express();


app.set ('view engine', 'ejs');

//All static files will be within the asset folder
app.use('/assets', express.static('assets'));

//GET requests here
app.get('/scramble', function(req,res){
    res.render('scramble');
});

app.get('/404', function(req,res){
    res.render('404');
});
app.get('/story', function(req,res){
    res.render('story');
});
app.get('/textSpeech', function(req, res){
    res.render('textSpeech');
});

app.get('/raspberrypi', function(req, res){
    res.send("Post request successful");
})

app.listen(3000);