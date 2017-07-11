const express = require('express');
const path = require('path');
const http = require('http');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bodyParser = require('body-parser');

const app = express();

//playlist
Playlist = require('./models/playlists');
Artiste = require('./models/artistes');
Chart = require('./models/charts');
Release = require('./models/releases')

//setting the client side
app.use(express.static('client'));

//bodyparser middleware
app.use(bodyParser.json());


app.set('port', process.env.PORT || 5000);

//connecting to the DB
mongoose.connection.openUri('mongodb://localhost/music')
const db = mongoose.connection;

//checking for errors in DB connection
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => {
    console.log('we are connected');
});



//GET REQUESTS
//get playlists
app.get('/api/playlists', (req, res) => {
    Playlist.getPlaylists((err, playlists) => {
        if(err){
            throw err;
        }
        res.json(playlists)
    });
});

//get artistes
app.get('/api/artistes', (req, res) => {
    Artiste.getArtistes((err, artistes) => {
        if(err){
            throw err;
        }
        res.json(artistes);
    });
});

//get charts playlist
app.get('/api/charts', (req, res) => {
    Chart.getCharts((err, charts) => {
        if(err){
            throw err;
        }
        res.json(charts);
    });
});

//add new releases playlist
app.get('/api/releases', (req, res) => {
    Release.getReleases((err, releases) => {
        if(err){
            throw err;
        }
        res.json(releases);
    });
});





//POST REQUESTS
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

//add artiste
app.post('/api/artistes', (req, res) => {
    const artiste = req.body;
    Artiste.addArtiste(artiste, (err, artiste) => {
        if(err){
            throw err
        }
        res.json(artiste);
    });
});

//add chart playlist
app.post('/api/charts', (req, res) => {
    const chart = req.body;
    Chart.addChart(chart, (err, chart) => {
        if(err){
            throw err;
        }
        res.json(chart);
    });
});

//add new release playlist
app.post('/api/releases', (req, res) => {
    const release = req.body;
    Release.addRelease(release, (err, release) => {
        if(err){
            throw err;
        }
        res.json(release);
    });
});





//DELETE REQUESTS
//delete playlist from playlist section
app.delete('/api/playlists/:_id', (req, res) => {
    const id = req.params._id;
    Playlist.removePlaylist(id, (err, playlist) => {
        if(err){
            throw err;
        }
        res.json(playlist)
    });
});

//delete playlist from artistes section
app.delete('/api/artistes:_id', (req, res) => {
    const id = req.params._id;
    Artiste.removeArtiste(id, (err, artiste) => {
        if(err){
            throw err;
        }
        res.json(artiste);
    });
});

//delete playlist for charts section
app.delete('/api/charts:_id', (req, res) => {
    const id = req.params._id;
    Chart.removeChart(id, (err, chart) => {
        if(err){
            throw err;
        }
        res.json(chart);
    });
});

//delete playlist from new release
app.delete('/api/releases:_id', (req, res) => {
    const id = req.params._id;
    Release.removeRelease(id, (err, release) => {
        if(err){
            throw err;
        }
        res.json(release);
    });
});



//listening to port var
var server = http.createServer(app).listen(app.get('port'), function () {
    console.log('Server listening on port ' + app.get('port'));
});