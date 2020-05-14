PORT = 3000;


var express = require('express');

var app = express();


app.set ('view engine', 'ejs');

//All static files will be within the asset folder
app.use('/assets', express.static('assets'));

app.get('/',function(req, res){
    res.render('index');
})


app.listen(PORT)