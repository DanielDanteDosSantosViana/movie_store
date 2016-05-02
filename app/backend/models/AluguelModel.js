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
AluguelDAO.prototype.findByUserId = function(id, callback) {
 this.model.find({idUsuario:id}).populate('movies').exec(callback);
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
