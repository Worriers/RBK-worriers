exports.errorLogger = function (error, req, res, next) {
  console.error(error.stack);
  next(error);
};

exports.errorHandler = function (error, req, res, next) {
  res.status(500).send({error: error.message});
};

// Simple route middleware to ensure user is authenticated.
//   Use this route middleware on any resource that needs to be protected.  If
//   the request is authenticated (typically via a persistent login session),
//   the request will proceed.  Otherwise, the user will be redirected to the
//   login page.

exports.ensureAuthenticated = function (req, res, next) {
  if (req.isAuthenticated()) { 
    console.log('authhhhhhhhhhhhh')
    return next(); }
    console.log('NOT authhhhhhhhh')
  res.redirect('/login')
}