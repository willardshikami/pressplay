const express = require('express');
const path = require('path');
const http = require('http');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bodyParser = require('body-parser');

const app = express();

//playlist
Playlist = require('./models/playlists');

//setting the client side
app.use(express.static('client'));

//bodyparser middleware
app.use(bodyParser.json());


app.set('port', process.env.PORT || 5000);

//connecting to the DB
mongoose.connection.openUri('mongodb://willies:animelistpassword1@ds151062.mlab.com:51062/music')
const db = mongoose.connection;

//checking for errors in DB connection
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => {
    console.log('we are connected');
});

//get playlists
app.get('/api/playlists', (req, res) => {
    Playlist.getPlaylists((err, playlists) => {
        if(err){
            throw err;
        }
        res.json(playlists)
    });
});

//add playlist
app.post('/api/playlists', (req, res) => {
    const playlist = req.body;
    Playlist.addPlaylist(playlist, (err, playlist) =>{
        if(err){
            throw err;
        }
        res.json(playlist)
    });
});

//delete playlist
app.delete('/api/playlists/:_id', (req, res) => {
    const id = req.params._id;
    Playlist.removePlaylist(id, (err, playlist) => {
        if(err){
            throw err;
        }
        res.json(playlist)
    });
});

//listening to port var
var server = http.createServer(app).listen(app.get('port'), function () {
    console.log('Server listening on port ' + app.get('port'));
});