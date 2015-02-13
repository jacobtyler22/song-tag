var mongoose = require('mongoose');
var artist = require("./artist");
var Schema = mongoose.Schema;

var schema = new Schema({
	name: {type: String, index: true, required: true},
	album: {type: String, index: true, required: true},
	genre: String,
	releasedOn: Date,
	isExplicit: Boolean,
	artist: {type: Schema.Types.ObjectId, ref: 'artist'},
	tags: [{type: String, ref: 'tag'}]
});

module.exports = mongoose.model('song', schema);