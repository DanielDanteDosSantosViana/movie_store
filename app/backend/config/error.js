module.exports = function(app){
  app.use(function(request, response, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  app.use(function(err, request, response, next) {
    console.log(err);
    response.status(err.status || 500).json({ err: err.message });
  });

}
