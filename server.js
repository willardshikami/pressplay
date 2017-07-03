const express = require('express');
const path = require('path');
const http = require('http');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

//playlist
Playlist = require('./models/playlists');

//setting the client side
app.use(express.static('client'));

//bodyparser middleware
app.use(bodyParser.json());

//port var
const port = 5000;

//home
app.get('/', (req, res) => {
    res.send('Invalid endpoint')
});

//connecting to the DB
mongoose.connection.openUri('mongodb://localhost/music')
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
app.post('/api/playlists', () => {
    const playlist = req.body;
    Playlist.addPlaylist(playlist, (err, playlist) =>{
        if(err){
            throw err;
        }
        res.json(playlist)
    });
});

//remove playlist
app.delete('/api/playlists', () => {
    const playlist = req.body;
    Playlist.removePlaylist(playlist, (err, playlist) =>{
        if(err){
            throw err;
        }
        res.json(playlist)
    });
});

app.listen(port, () => {
    console.log('Server started on port ' + port);
});