var mongoose = require('mongoose');

var AchievmentsSchema = new mongoose.Schema({
	category : {
		type : String,
		required : true 
	},
	desc : {
		type : String,
		required : true 
	},
	url : {
		type : String, 
		required : true 
	},
	date : {
		type : String , 
		required : true 
	}
});

module.exports = mongoose.model('achievments', AchievmentsSchema);

module.exports.create({	category : "Promotion",
	desc: "nothing at all!",
	url : "www.url.com",
	date : "2017/8/8"}, function(err, doc) {
	if(err) throw err;
    // console.log(doc);
});