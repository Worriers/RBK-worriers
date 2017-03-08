var comment = require("./commentModel.js");

module.exports ={
	getAllComments : function (req, res) {
	  comment.find().exec(function (err, data) {
	    if(err){
		  res.status(500).send('err');
		}else{
		  res.json(data)
		}
		});
	},
	insertComment : function (req, res) {
	  var newComment = new comment(req.body);  
      comment.save(function (err, newComment) {  
        if (err) {
          res.send(err);
        }
        res.send(newComment);
        });  
	}
}