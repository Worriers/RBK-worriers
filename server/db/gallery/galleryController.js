var gallery = require("./galleryModel.js");

module.exports ={
	getAllImages : function (req, res) {
	  gallery.find().exec(function (err, data) {
	    if(err){
		  res.status(500).send('err');
		}else{
		  res.json(data)
		}
		});
	},
	insertImage : function (req, res) {
    console.log('this is body object',req.body);
    console.log('this is file object', req.file);
	  var newImage = new gallery(req.body);  
      newImage.save(function (err, newImage) {  
        if (err) {
          res.send(err);
        }
        res.status(201).send(newImage);
        });  
	},
	deleteImg : function(req,res) {
		var id = req.body._id ; 
          gallery.remove({_id:id}, function (err, p) {
            if (err){
              throw err
            }
            // console.log('image removed');
            res.status(200).send();
		})
    }
}