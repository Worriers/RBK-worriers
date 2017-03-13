var express = require('express');
var mongoDB = require('./db/config.js');
var dotenv = require('dotenv').config();

var app = express();

require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


module.exports = app;
