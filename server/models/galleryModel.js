var mongoose = require('mongoose');

var ImagesSchema = new mongoose.Schema({
	img :{
		data: Buffer, //check if there is other way to store the images same in projects model
		contentType: String,
		required : true
	},
	description : {
		type : String
	}
});

module.exports = mongoose.model('gallery', ImagesSchema);
