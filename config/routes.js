module.exports = function(app){
  //Route the request please
  app.get('/', function(req, res){
    res.render('index',{ title: 'Home' });
  });

}
