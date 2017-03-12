var projects = require("./projectsModel.js");

module.exports ={
	getAllProjects : function (req, res) {
	  projects.find({}).exec(function (err, data) {
	    if(err){
		  res.status(500).send('err');
		}else{
		  res.json(data)
		}
		});
	},
	insertProject : function (req, res) {
	  var newProject= new projects(req.body);  
      newProject.save(function (err, data) {  
        if (err) {
          res.send(err);
        }
        res.send(data);
        });  
	}
}