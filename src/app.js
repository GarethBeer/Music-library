const express = require('express');

const bodyParser = require('body-parser');

const artistControllers = require('./Controllers/artists');

const app = express();

app.post('/artists', artistControllers.create);

module.exports = app;
