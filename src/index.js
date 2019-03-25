const PORT = process.env.PORT || 1338;

import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import apiCache from 'apicache';

// const cors = require('cors');
// const express = require('express');
// const bodyParser = require('body-parser');
// const fs = require('fs');

// const apicache = require('apicache');
const cache = apiCache.middleware;
const cacheTimeout = 20;


const api = require('./api');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(cache(cacheTimeout + ' minutes'));
app.use('/', api);

app.listen(PORT, () => console.log(`App started and listening on port ${PORT}`));
