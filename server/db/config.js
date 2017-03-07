var mongoose = require('mongoose'); 

var mongoURI = process.env.MONGODB_URI ||'mongodb://localhost:27017/warriors';
mongoose.connect(mongoURI);
var db = mongoose.connection;
db.once('open',function () {
	console.log('mongoDB is open');
});
exports.mongoDB = db;