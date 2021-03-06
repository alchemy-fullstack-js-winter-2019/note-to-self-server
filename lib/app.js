const express = require('express');
const app = express();
const notes = require('../lib/routes/notes');
const faves = require('../lib/routes/faves');
const notFound = require('./middleware/notFound');
const { handler } = require('./middleware/error');
const connection = require('./middleware/connection');

app.use(require('./middleware/cors'));

app.use(express.json());

app.use('/notes', connection, notes);

app.use('/faves', connection, faves);

app.use(notFound);

app.use(handler);

module.exports = app;
