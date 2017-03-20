var gallery = require("./galleryModel.js");
var fs = require('fs');

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
    var desc = req.body.desc;
    var path = req.file.destination.split('src')[1] + '/' + req.file.filename;
    var newImage = new gallery({desc: desc, path: path});  
    newImage.save(function (err, newImage) {  
      if (err) {
        res.send(err);
      }
      res.status(201).send(newImage);
    });  
  },
  deleteImg : function(req,res) {
    var id = req.params.id;
    gallery.findById(id,function(err,data){
      if(err) throw err;
      if(data){
          gallery.remove({_id:id}, function (err, obj) {
          if (err){ throw err }
          if(obj.result.n === 0){
            next(new Error("Image is not deleted, try again"));
          }
          var imgPath = "./src" + data.path;
          fs.unlink(imgPath, function(err){
          if(err) throw err;
            res.status(200).send();
          }); 
        })
      }
    }) 

  }
}