/**
 * @MOVIE_STORE
 *  app.js - File to config express
 */

 //config to express
var app  = require('./config/express')();
// routes
var routes = require('./config/routes')(app);
// error handling
var error = require('./config/error')(app);

//default DB
var default_db = require('./config/default');

// server listener
module.exports = app;
