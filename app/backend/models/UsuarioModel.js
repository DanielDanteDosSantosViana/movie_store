'use strict';
function UsuarioDAO(model) {
  this.model = model;
}
UsuarioDAO.prototype.create = function(data, callback) {
  var model = new this.model(data);
  model.save(function(err, result) {
    callback(err, result);
  });
};
UsuarioDAO.prototype.find = function(query, callback) {
  this.model.find(query).exec(callback);
};

UsuarioDAO.prototype.findOne = function(_email,_senha, callback) {
  var query = {email : _email, senha: _senha };
  this.model.findOne(query).exec(function(err, result) {
    callback(err, result);
  });
};

UsuarioDAO.prototype.findById = function(id, callback) {
  var query = { _id : id };
  this.model.findOne(query).exec(callback);
};


UsuarioDAO.prototype.update = function(_id, data, callback) {
  var query = { _id : _id };
  this.model.update(query, data).exec(function(err, result) {
    callback(err, result);
  });
};

UsuarioDAO.prototype.remove = function(_id, callback) {
  var query = { _id : _id };
  this.model.remove(query).exec(function(err, result) {
    callback(err, result);
  });
};

module.exports = function(mongoose) {
  var Usuario = mongoose.model('Usuario', {
      nome : String,
      sobrenome : String,
      senha : String,
      email : String,
      token: String,
  });
  return new UsuarioDAO(Usuario);
};
