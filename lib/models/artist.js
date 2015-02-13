var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
	name: {type: String, unique: true, index: true, required: true},
	bio: String,
	genres: [{type: String, unique: true}]
});

module.exports = mongoose.model('artist', schema);