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

function GeneroController(GeneroModel) {
  this.model = Promise.promisifyAll(GeneroModel);
}

GeneroController.prototype.retrievingThreePerCategory = function(request, response, next) {
  this.model.findThreePerCategoryAsync({})
    .then(function(data) {
      response.json({resposta:data});
    })
    .catch(next);
};

GeneroController.prototype.findPerCategory = function(request, response, next) {
  this.model.findPerCategoryAsync(request.params.genero)
    .then(function(data) {
      response.json({resposta:data});
    })
    .catch(next);
};

GeneroController.prototype.contarTipos = function(request, response, next) {
  this.model.contarGenerosAsync({})
    .then(function(data) {
      response.json({resposta:data});
    })
    .catch(next);
};

GeneroController.prototype.getById = function(request, response, next) {
  var _id = request.params._id;
  this.model.findOneAsync(_id)
    .then(handleNotFound)
    .then(function(data) {
      response.json(data);
    })
    .catch(next);
};



module.exports = function(GeneroModel) {
  return new GeneroController(GeneroModel);
};
