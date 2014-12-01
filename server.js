var express = require('express');
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var app = express();

//Setup express settings
require('./config/express')(app);

//Setup routes
require('./config/routes')(app);

//Start the app by listening on <port>
var port = process.env.PORT;
app.listen(port);
console.log('Express app started on port ' + port);

//expose app
exports = module.exports = app;
