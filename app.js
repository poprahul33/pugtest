var express = require('express');
var pug = require('pug');
var path = require('path');
var router = require('./router');


var app= express();

app.set('views', path.resolve('./views'));

app.set('view engine', 'pug');

app.set('defaultLayout', 'main');

app.use('/', express.static(path.resolve('./public')));

// Router for navigation
app.use(router);

app.listen(3000, function(){
    console.log('Server running!');
});

