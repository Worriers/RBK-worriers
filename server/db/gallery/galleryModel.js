var mongoose = require('mongoose');

var ImagesSchema = new mongoose.Schema({
	img :{
		data: Buffer,
		contentType: String
	},
	description : {
		type : String
	}
});
 
module.exports = mongoose.model('gallery', ImagesSchema);

// module.exports.create({description: 'coolMinion'}, function(err, doc) {
// 	if(err) throw err;
//     console.log(doc);
// });
