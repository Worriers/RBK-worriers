var mongoose = require('mongoose'); 

var ProjectsSchema = new mongoose.Schema({
	title : {
		type: String,
		required: true,
		unique: true
	},
	url : {
		type : String ,
		required : true , 
		unique : true
	},
	gitHubLink : {
		type : String
	},
	teamMembers :  [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'users'
  	}],
	img : {
		type : String
	},
	approved : {
		type: Boolean,
    	default: false
	}
})

module.exports = mongoose.model('projects', ProjectsSchema);