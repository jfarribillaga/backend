'use strict';
const PORT = 1338;

const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const api = require('./api');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/', api);
// app.use('/locations', api.locationsList());

app.listen(PORT, () => console.log(`App started and listening on port ${PORT}`));
