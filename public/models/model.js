var mongoose = require('mongoose');

var appSchema = mongoose.Schema({
	name : String,
	bio : String,
	skills : Array,
	years : Number,
	why : String
})

module.exports = mongoose.model('App', appSchema)