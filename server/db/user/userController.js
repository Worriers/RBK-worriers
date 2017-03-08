var user = require("./userModel.js");

module.exports ={
	getAllUsers : function (req, res) {
	  user.find().exec(function (err, alluser) {
	    if(err){
		  res.status(500).send('err');
		}else{
		  res.json(alluser)
		}
		});
	},
	insertUser : function (req, res) {
	  var newUser = new user(req.body);  
      user.save(function (err, newUser) {  
        if (err) {
          res.send(err);
        }
        res.send(newUser);
        });  
	},
	getOneUser : function (req,res) {
	  user.findById(req.params.id, function (err, teacher) {  
        if (err) {
          res.send(err)
        }else{
          res.json(teacher)
        } 
        })
    }
}