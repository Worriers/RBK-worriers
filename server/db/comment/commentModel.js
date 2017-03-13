var mongoose = require('mongoose');

var commentSchema = new mongoose.Schema({
	name : {
		type: String
	},
	text : {
		type : String,
		required : true
	}
	// _question : { type: mongoose.Schema.Types.ObjectId, ref: 'questions' }
});

module.exports = mongoose.model('comments', commentSchema);