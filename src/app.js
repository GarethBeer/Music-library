const express = require('express');

/* const bodyParser = require('body-parser'); */

const artistControllers = require('./Controllers/artists');

const app = express();
app.use(express.json());

app.post('/artists', artistControllers.create);

app.get('/artists', artistControllers.list);
module.exports = app;
