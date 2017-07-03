const express = require('express');
const path = require('path');
const http = require('http');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

//setting the client side
app.use(express.static('client'));

//port var
const port = 5000;

//home
app.get('/', (req, res) => {
    res.send('Invalid endpoint')
});

app.listen(port, () => {
    console.log('Server started on port ' + port);
});