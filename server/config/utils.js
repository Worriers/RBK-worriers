
var bcrypt = require('bcrypt-nodejs');

exports.errorLogger = function (error, req, res, next) {
  console.error(error.stack);
  next(error);
};

exports.errorHandler = function (error, req, res, next) {
  res.status(500).send({error: error.message});
};

exports.ensureAuthenticated = function (req, res, next) {
  if (req.isAuthenticated() && req.user.completed && req.user.activated) {
    return next(); 
  }
  res.status(401).send();
}
exports.adminAuth = function (req, res, next) {
  if (req.isAuthenticated()) {
    return next(); 
  }
  res.status(401).send();
}
exports.isLogged = function (req, res){
  if(req.isAuthenticated()){
    res.send({'id':req.user._id,
              'activated': req.user.activated,
              'completed': req.user.completed
            });
  } else {
    res.json({'id': null});
  }
}

exports.comparePass = function(pass, hash, cb) {
  bcrypt.compare(pass, hash, function(err, isMatch) {
    if (err) {
      throw new Error(err);
    }
    cb(null,isMatch);
  });
};