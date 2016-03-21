var mongoose  = require('mongoose'),
    debug     = require('debug')('movie_store:db'),
    config  = require('../config/default');

'use strict';
function _connection() {
  console.log(config);
  var username  = config.mongo.username,
      password  = config.mongo.password,
      server    = config.mongo.server,
      port      = config.mongo.port,
      database  = config.mongo.database,
      auth = username ? username + ':' + password + '@' : '';
  return 'mongodb://' + auth + server + ':' + port + '/' + database;
}
mongoose.connect(_connection());
var db = mongoose.connection;
db.on('error', function(err) {
  debug(err);
});
db.once('open', function (callback) {
  debug('connected to mongodb');
});
module.exports = mongoose;
