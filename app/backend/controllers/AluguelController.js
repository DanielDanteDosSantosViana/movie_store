var debug = require('debug')('movie_store:controller');
var Promise = require('bluebird');

var handleNotFound = function(data) {
  if(!data) {
    var err = new Error('Not Found');
    err.status = 404;
    throw err;
  }
  return data;
};

function AluguelController(AluguelModel) {
  this.model = Promise.promisifyAll(AluguelModel);
}

AluguelController.prototype.alugar = function(request, response, next) {
  var aluguel = request.body.aluguel.aluguel;
  console.log(aluguel.movies);

  this.model.createAsync(aluguel)
    .then(function(err, data) {
      if(!err){
        response.json({resposta:err});
      }else{
        response.json({resposta:"OK"})
      }

    })
    .catch(next);
};

AluguelController.prototype.findByUserId = function(request, response, next) {
  var idUser = request.params.id;
  this.model.findByUserIdAsync(idUser)
    .then(handleNotFound)
    .then(function(data) {
      response.json({resposta:data});
    })
    .catch(next);
};


module.exports = function(AluguelModel) {
  return new AluguelController(AluguelModel);
};
