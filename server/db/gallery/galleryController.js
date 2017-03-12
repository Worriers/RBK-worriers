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
	  var newImage = new gallery(req.body);  
      newImage.save(function (err, newImage) {  
        if (err) {
          res.send(err);
        }
        res.send(newImage);
        });  
	}
}