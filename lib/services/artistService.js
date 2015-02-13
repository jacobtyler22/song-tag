var artistModel = require('../models/artist');
var q = require('q');

module.exports.save = function(artist){
	var dfd = q.defer();
	artistModel(artist).save(function(err, res){
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
	artistModel.find(query, function(err, res){
		if(!err){
			dfd.resolve(res);
		} else {
			dfd.reject(err);
		}
	});
	return dfd.promise;
};