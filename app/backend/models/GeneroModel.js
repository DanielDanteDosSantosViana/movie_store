'use strict';
function GeneroDAO(model) {
  this.model = model;
}
GeneroDAO.prototype.create = function(data, callback) {
  var model = new this.model(data);
  model.save(function(err, result) {
    callback(err, result);
  });
};
GeneroDAO.prototype.find = function(query, callback) {
  this.model.find(query).populate('movies').exec(callback);
};


GeneroDAO.prototype.findThreePerCategory = function(query, callback) {
  this.model.find({},{ movies: {$slice: -3}}).populate('movies').exec(callback);
};

GeneroDAO.prototype.findPerCategory = function(tipo, callback) {
  this.model.find({nome:tipo}).populate('movies').exec(callback);
};

GeneroDAO.prototype.contarGeneros = function(query, callback) {
this.model.aggregate([ { $project: {  nome:1 ,count:{$size:"$movies"} } } ]).exec(callback);
};
GeneroDAO.prototype.findOne = function(_id, callback) {
  var query = { _id : _id };
  this.model.findOne(query).exec(callback);
};
GeneroDAO.prototype.update = function(_id, data, callback) {
  var query = { _id : _id };
  this.model.update(query, data).exec(function(err, result) {
    callback(err, result);
  });
};
GeneroDAO.prototype.remove = function(_id, callback) {
  var query = { _id : _id };
  this.model.remove(query).exec(function(err, result) {
    callback(err, result);
  });
};
module.exports = function(mongoose) {
  var Genero = mongoose.model('Genero', {
      nome : String,
      movies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }],
  });
  return new GeneroDAO(Genero);
};
