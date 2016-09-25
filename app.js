var express = require('express');
var pug = require('pug');
var path = require('path');


var app= express();

app.set('views', path.resolve('./views'));

app.set('view engine', 'pug')

app.set('defaultLayout', 'main');

app.use('/', express.static(path.resolve('./public')));

var homePage = require('./pages/home');
app.use(homePage);

app.listen(3000, function(){
    console.log('Server running!');
});

