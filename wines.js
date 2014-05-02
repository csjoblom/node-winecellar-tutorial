exports.findAll = function(req,res){
    res.send([{name:'wine1'},{name:'wine2'},{name:'wine3'},{name:'wine4'}])
};

exports.findById = function(req,res){
    res.send({id:req.params.id, name: 'the name', description: 'description'});
};
