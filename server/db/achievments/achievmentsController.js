var achievments = require("./achievmentsModel.js");

module.exports ={
	getAllAchievments : function (req, res) {
	  achievments.find().exec(function (err, data) {
	    if(err){
		  res.status(500).send('err');
		}else{
		  res.json(data)
		}
		});
	},
	insertAchievment : function (req, res) {
	  var newAchievment = new achievments(req.body);  
      achievments.save(function (err, newAchievment) {  
        if (err) {
          res.send(err);
        }
        res.send(newAchievment);
        });  
	}
}