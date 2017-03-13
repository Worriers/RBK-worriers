var quastion = require("./quastionModel.js");

module.exports ={
	getAllQuastions :function (req, res) {
	  quastion.find({}).populate({
    path: 'comments'}).exec(function (err, data) {
	    if(err){
		  res.status(500).send('err');
		}else{
		  // console.log(data);
		  res.json(data)
		}
		});
	},
	insertQuastion : function (req, res) {
		console.log(req.body)
	  var newQuastion = new quastion(req.body);  
      newQuastion.save(function (err, data) {  
        if (err) {
          res.send(err);
        }
        res.status(201).send(data);
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