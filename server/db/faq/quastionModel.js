var mongoose = require('mongoose');

var QuestionsSchema = new mongoose.Schema({
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
})

module.exports = mongoose.model('questions', QuestionsSchema);


// module.exports.create({text: 'coolMinion'}, function(err, doc) {
// 	if(err) throw err;
//     console.log(doc);
// });
