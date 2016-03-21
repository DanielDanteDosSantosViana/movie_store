
var debug = require('debug')('movie_store:authorization');
var emailUtil = require("../email/EmailUtil");

function ensureAuthorized(req, res, next) {
  console.log("AUTORIZATIONNNNNNNNNNN");
var bearerToken;
    var bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== 'undefined') {
        var bearer = bearerHeader.split(" ");
        bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {
        res.send(403);
    }
}

module.exports = function(req, res, next) {
  return new ensureAuthorized(req, res, next);
};
