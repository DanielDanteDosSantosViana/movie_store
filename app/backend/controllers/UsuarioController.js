var debug = require('debug')('movie_store:controller');
var jwt = require('jwt-simple');
var moment = require('moment');
var config = require('../config/default');
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
      if(!err){
        response.json({resposta:err});
      }else{
        response.json({resposta:"OK"})

      }
    })
    .catch(next);
};

UsuarioController.prototype.editar = function(request, response, next) {
  var usuario = request.body.usuario;
  this.model.updateAsync(usuario.id,usuario)
    .then(function(err, data) {
      if(!err){
        response.json({resposta:err});
      }
      response.json({resposta:"OK"});
    })
    .catch(next);
};

UsuarioController.prototype.getById = function(request, response, next) {
  var _id = request.params.id;
  this.model.findByIdAsync(_id)
    .then(handleNotFound)
    .then(function(data) {
      response.json({resposta:data});
    })
    .catch(next);
};


UsuarioController.prototype.login = function(request, response, next) {
  var email = request.body.email,
  senha = request.body.senha;
  this.model.findOneAsync(email,senha)
    .then(function(data, err){
      if(err!=null){
        var err = new Error('Unauthorized');
        err.status = 401;
        next(err);
      }else if(!data) {
            var err = new Error('Usuário não existente!');
            err.status = 404;
            throw err;
      }else{
        var expires = moment().add(7,'days').valueOf();
        var token = jwt.encode({
            user:data.nome,
            exp: expires
        },config.tokenSecreto);

        response.json({
          resposta:{
            token:token,
            id:data._id
          }
        });
      }
    })
    .catch(next);
};

module.exports = function(UsuarioModel) {
  return new UsuarioController(UsuarioModel);
};
