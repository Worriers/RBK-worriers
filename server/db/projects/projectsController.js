var projects = require("./projectsModel.js");
var users = require("../user/userModel.js");
var webshot = require('webshot');

module.exports ={
	getAllProjects : function (req, res) {
	  projects.find({approved : true}).populate('teamMembers', '_id displayName username cohort').exec(function (err, data) {
	    if(err){
		  res.status(500).send(err);
		}else{
		  res.json(data)
		}
		});
	},
	insertProject : function (req, res) {
	  var project = req.body;
	  var team = req.body.teamMembers;
	  delete project.teamMembers;
	  var newProject = new projects(project); 
      newProject.save(function (err, newProject) {
        if (err) {
          res.status(201).send({error: 1, text:"duplicated"});
        } else if(newProject){

        	team.forEach(id => {
        		users.findById(id, (err, user) => {
        			user.projects.push(newProject._id);
        			user.save((err, data) => { if(err) console.log("when adding project to user:", err) });
        		})
        		newProject.teamMembers.push(id);
        	});

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
      		res.status(201).send({error: 1, text:"duplicated"});
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