var mongoose = require('mongoose'); 
require('mongoose-type-url');

var ProjectsSchema = new mongoose.Schema({
	title : {
		type: String,
		required: true,
		unique: true
	},
	url : {
		type : mongoose.SchemaTypes.Url ,
		required : true , 
		unique : true
	},
	deployLink : {
		type : mongoose.SchemaTypes.Url,
		required : true 
	},
	gitHubLink : {
		type : mongoose.SchemaTypes.Url
	}
	teamMembers : {
		type : Array 
	}
	img : {
		data: Buffer,
		contentType: String,
		required : true
	}
})

module.exports = mongoose.model('projects', ProjectsSchema);