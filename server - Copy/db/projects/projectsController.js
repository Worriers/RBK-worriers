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
      newProject.save(function (err, newProject) {  
        if (err) {
          res.send(err);
        }
        res.status(201).send(newProject);
        });  
	},
	deleteProject : function(req,res) {
		var id = req.body._id ; 
          projects.remove({_id: id}, function (err, p) {
            if (err){
              throw err
            }
            console.log('project removed');
            res.status(200).send();
		})
    }
}
