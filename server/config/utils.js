exports.errorLogger = function (error, req, res, next) {
  console.error(error.stack);
  next(error);
};

exports.errorHandler = function (error, req, res, next) {
  res.status(500).send({error: error.message});
};