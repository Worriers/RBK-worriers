var mongoose = require('mongoose');

var QuastionsSchema = new mongoose.Schema({
	name : {
		type: String
	},
	text : {
		type : String,
		required : true
	},
	comments : [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'comments'
  }]
});

module.exports = mongoose.model('quastions', QuastionsSchema);
