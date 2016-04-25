'use strict';
function MovieDAO(model) {
  this.model = model;
}
MovieDAO.prototype.create = function(data, callback) {
  var model = new this.model(data);
  model.save(function(err, result) {
    callback(err, result);
  });
};
MovieDAO.prototype.findLancamento = function(callback) {
  this.model.find().limit(4).exec(callback);
};

MovieDAO.prototype.find = function(query, callback) {
  this.model.find({  nome: {$regex: new RegExp(query , "i")}}).exec(callback);
};

MovieDAO.prototype.vistos = function(query,callback) {
  this.model.find(query).sort({qtdVisualizacao:-1}).limit(10).exec(callback);
};

MovieDAO.prototype.findOne = function(_id, callback) {
  var query = { _id : _id };
  this.model.findOne(query).exec(callback);
};
MovieDAO.prototype.update = function(_id, data, callback) {
  var query = { _id : _id };
  this.model.update(query, data).exec(function(err, result) {
    callback(err, result);
  });
};
MovieDAO.prototype.remove = function(_id, callback) {
  var query = { _id : _id };
  this.model.remove(query).exec(function(err, result) {
    callback(err, result);
  });
};
module.exports = function(mongoose) {
  var Movie = mongoose.model('Movie', {
      nome : String,
      preco : String,
      genero : String,
      descricao: String,
      qtdEstrela : Number,
      qtdVisualizacao : Number,
      urlImg: String
  });
  return new MovieDAO(Movie);
};
