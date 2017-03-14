var mongoose = require('mongoose'); 

var ProjectsSchema = new mongoose.Schema({
	title : {
		type: String,
		required: true,
		// unique: true
	},
	url : {
		type : String ,
		required : true , 
		// unique : true
	},
	gitHubLink : {
		type : String
	},
	teamMembers : {
		type : Array 
	},
	img : {
		data: Buffer,
		contentType: String
	}
})

module.exports = mongoose.model('projects', ProjectsSchema);