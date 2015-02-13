var songModel = require('../models/song');
var q = require('q');

module.exports.save = function(song){
	var dfd = q.defer();
	songModel(song).save(function(err, res){
		if(!err){
			dfd.resolve(res);
		} else {
			dfd.reject(err);
		}
	});
	return dfd.promise;
};

module.exports.find = function(query){
	var dfd = q.defer();
	songModel.find(query, function(err, res){
		if(!err){
			dfd.resolve(res);
		} else {
			dfd.reject(err);
		}
	});
	return dfd.promise;
};