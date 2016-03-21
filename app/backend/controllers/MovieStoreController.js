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

function MovieStoreController(MovieStoreModel) {
  this.model = Promise.promisifyAll(MovieStoreModel);
}

MovieStoreController.prototype.getAll = function(request, response, next) {
  this.model.findAsync({})
    .then(function(data) {
      response.json({resposta:data});
    })
    .catch(next);
};

MovieStoreController.prototype.search = function(request, response, next) {

  var busca = request.body.q;
   this.model.findAsync(busca)
    .then(function(data) {
      response.json({resposta:data});
    })
    .catch(next);
};

MovieStoreController.prototype.getLancamentos = function(request, response, next) {
   this.model.findLancamentoAsync()
    .then(function(data) {
      response.json({resposta:data});
    })
    .catch(next);
};


MovieStoreController.prototype.getById = function(request, response, next) {
  var _id = request.params._id;
  this.model.findOneAsync(_id)
    .then(handleNotFound)
    .then(function(data) {
      response.json({resposta:data});
    })
    .catch(next);
};
MovieStoreController.prototype.create = function(request, response, next) {
  var body = request.body;
  this.model.createAsync(body)
    .then(function(err, data) {
      response.json(data);
    })
    .catch(next);
};
MovieStoreController.prototype.update = function(request, response, next) {
  var _id = request.params._id,
      body = request.body;
  this.model.updateAsync(_id, body)
    .then(function(err, data) {
      response.json(data);
    })
    .catch(next);
};
MovieStoreController.prototype.remove = function(request, response, next) {
  var _id = request.params._id;
  this.model.removeAsync(_id)
    .then(function(err, data) {
      response.json(data);
    })
    .catch(next);
};

MovieStoreController.prototype.maisVistos = function(request, response, next) {
  this.model.vistosAsync({})
    .then(function(data) {
      response.json({resposta:data});
    })
    .catch(next);
};

module.exports = function(MovieStoreModel) {
  return new MovieStoreController(MovieStoreModel);
};
