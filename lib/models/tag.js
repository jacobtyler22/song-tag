var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
	_id: {type: String, required: true, unique: true}
});

module.exports = mongoose.model('tag', schema);