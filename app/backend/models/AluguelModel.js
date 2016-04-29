'use strict';
function AluguelDAO(model) {
  this.model = model;
}
AluguelDAO.prototype.create = function(data, callback) {
  var model = new this.model(data);
  model.save(function(err, result) {
    callback(err, result);
  });
};
AluguelDAO.prototype.findByUserId = function(query, callback) {
 var _id = request.params._id;
  this.model.findOneAsync(_id)
    .then(handleNotFound)
    .then(function(data) {
      response.json({resposta:data});
    })
    .catch(next);
};


module.exports = function(mongoose) {
  var Aluguel = mongoose.model('Aluguel', {
      dataLimite : { type: Date},
      dataInicio: {type: Date, default: Date.now },
      idUsuario: String,
      movies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }],
  });
  return new AluguelDAO(Aluguel);
};
