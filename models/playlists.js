const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//the schema
const playlistSchema = mongoose.Schema({
	playlist_name:{
		type: String,
		required: true
	},
	username:{
		type: String,
		required: true
	}, 
	number_of_songs: {
		type: String,
		required: true
	},
	image_url:{
		type: String
	},
	added_date: {
		type: Date,
		default: Date.now
	}
});

//defining the model
const Playlist = module.exports = mongoose.model('playlist', playlistSchema);

//get resource
module.exports.getPlaylists = function(callback, limit){
	Playlist.find(callback).limit(limit);
}