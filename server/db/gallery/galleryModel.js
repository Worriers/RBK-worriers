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
