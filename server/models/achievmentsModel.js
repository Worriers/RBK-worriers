var mongoose = require('mongoose');
require('mongoose-type-url');

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
		type : mongoose.SchemaTypes.Url, 
		required : true 
	},
	date : {
		type : String , 
		required : true 
	}
});

module.exports = mongoose.model('achievments', AchievmentsSchema);
