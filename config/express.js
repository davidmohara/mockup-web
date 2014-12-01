var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

module.exports = function(app){
  //Setup basic Express
  app.set('showStackError', true);

  //Make it pretty first
  app.locals.pretty = true;

  //Feed up the public folder
  app.use(express.static('./public'));

  //Setup logger
  app.use(morgan('dev'));

  //Grabbing stuff in POST
  app.use(bodyParser.urlencoded({extended: false}));

  //Grok JSON
  app.use(bodyParser.json());

  //Simulate PUT & DELETE
  app.use(methodOverride());

  //Prep for serving views
  app.set('views', './app/views');
  app.set('view engine', 'jade');

}
