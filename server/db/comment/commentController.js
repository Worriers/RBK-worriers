var comment = require("./commentModel.js");
var question = require("../faq/quastionController.js")
module.exports ={
	getAllComments : function (req, res) {
		console.log(req.body)
	  comment.find({}).exec(function (err, data) {
	    if(err){
		  res.status(500).send('err');
		}else{
		  res.json(data)
		}
		});
	},
	insertComment : function (req, res) {
		console.log(req.body)
	// var newComment = new comment(req.body);
	// var qId = req.body.text;  
	//   question.findOne({text : qId}).exec(function(err, q){
	//   	if(err) throw err;
	//   	comment.create(newComment).exec(function(err, comment){
	//   		if(err) throw err;
	//   		q.push(comment._id);
	//   	})
	//   })
 //      newComment.save(function (err, data) {  
 //        if (err) {
 //          res.send(err);
 //        }
 //        res.send(data);
 //        });   
	}
}