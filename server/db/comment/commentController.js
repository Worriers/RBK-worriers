var comment = require("./commentModel.js");
var question = require("../faq/quastionModel.js")
module.exports ={
	getAllComments : function (req, res) {
		// console.log(req.body)
	  comment.find({}).exec(function (err, data) {
	    if(err){
		  res.status(500).send('err');
		}else{
		  res.json(data)
		}
		});
	},
	insertComment : function (req, res) {
		// console.log(req.body)
		var newComment = new comment(req.body);
		var qId = req.body.qText;  
		question.findOne({text : qId}).exec(function(err, q){
		  	if(err) throw err;
		  	newComment.save(function(err, comment){
		  		if(err) throw err;
		  		q.comments.push(comment._id);
		  		q.save(function(err, q){
		  			res.status(201).json(comment)
		  		})
		  	})
	  })
	}
}