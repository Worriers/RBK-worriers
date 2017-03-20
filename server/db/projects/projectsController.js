var projects = require("./projectsModel.js");
var webshot = require('webshot');

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
          res.send({error: 1, text:"duplicated"});
        } else if(newProject){
      		if(newProject.url){
				var options = {
							 	screenSize: {
							    	width: 1280,
							  		height: 800
							  	},
								shotSize: {
							    	width: 1280,
									height: 700
								},
								renderDelay : 3000,
								timeout : 4000
							};
				webshot(newProject.url, 'src/assets/projects/'+newProject.title.replace(" ", "-")+'.jpg', options, 
					function() {
						if(err){
							console.log(err);
						}
					    console.log("done");
					    newProject.img = 'assets/projects/'+newProject.title.replace(" ", "-")+'.jpg';
					    newProject.save((err, data) => {
					    	if(err){
					    		console.log(err);
					    	}
					    })
					})
      		}
      		res.status(201).send("project added!");
      	} else {
      		res.status(204).send({error: 1, text:"duplicated"});
      	}
        });  
	},
	deleteProject : function(req,res) {
		var id = req.body._id ; 
          projects.remove({_id: id}, function (err, p) {
            if (err){
              throw err
            }
            console.log('project removed');
            res.status(200).send(p);
		})
    }
}