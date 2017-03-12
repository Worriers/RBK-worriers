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
      newUser.save(function (err, newUser) {  
        if (err) {
          res.send(err);
        }
        res.status(201).send(newUser);
        });  
	},
	getOneUser : function (req,res) {
	  user.findById(req.params.id, function (err, user) {  
        if (err) {
          res.send(err)
        }else{
          res.json(user)
        } 
        })
    }
}