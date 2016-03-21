var mongojs = require('mongojs'),
    config  = require('../config/default'),
    debug   = require('debug')('movie_store:db');
'use strict';
function _connection() {
  var username  = config.mongo.username,
      password  = config.mongo.password,
      server    = config.mongo.server,
      port      = config.mongo.port,
      database  = config.mongo.database,
      auth        = username ? username + ':' + password + '@' : '';
  return 'mongodb://' + auth + server + ':' + port + '/' + database;
}
var db = mongojs(_connection());
db.on('error', function(err) {
  debug(err);
});
module.exports = db;
