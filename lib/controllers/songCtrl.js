var songService = require('../services/songService');

module.exports.post = function(req, res){
	songService.save(req.body).then(function(response){
		res.status(200).json(response);
	}, function(err){
		res.status(400).json(err);
	});
};

module.exports.get = function(req, res){
	songService.find(req.query).then(function(response){
		if(response.length){
			res.status(200).json(response);
		} else {
			res.status(200).json("Nothing!");
		}
	}, function(err){
		res.status(400).json(err);
	});
};