var quastion = require("./quastionModel.js");

module.exports ={
	getAllQuastions : function (req, res) {
	  quastion.find().exec(function (err, data) {
	    if(err){
		  res.status(500).send('err');
		}else{
		  res.json(data)
		}
		});
	},
	insertQuastion : function (req, res) {
	  var newQuastion = new quastion(req.body);  
      quastion.save(function (err, newQuastion) {  
        if (err) {
          res.send(err);
        }
        res.send(newQuastion);
        });  
	},
	getOne : function (req,res) {
	  quastion.findById(req.params.id, function (err, data) {  
        if (err) {
          res.send(err)
        }else{
          res.json(data)
        } 
        })
    }
}