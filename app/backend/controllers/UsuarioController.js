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

function UsuarioController(UsuarioModel) {
  this.model = Promise.promisifyAll(UsuarioModel);
}

UsuarioController.prototype.criar = function(request, response, next) {
  var usuario = request.body.usuario;
  this.model.createAsync(usuario)
    .then(function(err, data) {
      response.json({resposta:data});
    })
    .catch(next);
};

module.exports = function(UsuarioModel) {
  return new UsuarioController(UsuarioModel);
};
