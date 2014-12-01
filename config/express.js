var express = require('express');

module.exports = function(app){
  //Setup basic Express
  app.set('showStackError', true);

  //Make it pretty first
  app.locals.pretty = true;

  //Feed up the public folder
  app.use(express.static('./public'));

  //Prep for serving views
  app.set('views', './view');
  app.set('view engine', 'html');

  
}
