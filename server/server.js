var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    morgan = require('morgan');

var app = express();

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.static(__dirname + '/../../client'));

app.set('port', process.env.PORT || 3000);

mongoose.connect('mongodb://localhost/onbelay');

app.listen(app.get('port'), function() {
  console.log('climb on', app.get('port'));
});

module.exports = app;
