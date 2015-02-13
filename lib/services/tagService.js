var tagModel = require('../models/tag');
var q = require('q');

module.exports.save = function(tag){
	var dfd = q.defer();
	tagModel(tag).save(function(err, res){
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
	tagModel.find(query, function(err, res){
		if(!err){
			dfd.resolve(res);
		} else {
			dfd.reject(err);
		}
	});
	return dfd.promise;
};