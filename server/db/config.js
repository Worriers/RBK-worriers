var mongoose = require('mongoose'); 
var autoIncrement = require('mongoose-auto-increment');
var mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/warriors';
mongoose.connect(mongoURI);
var db = mongoose.connection;
autoIncrement.initialize(db);
db.once('open', function () {
  console.log('mongoDB is open');
});
exports.mongoDB = db;
exports.autoIncrement = autoIncrement;