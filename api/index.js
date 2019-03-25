'use strict';


const states = require('../mocks/states.json');
const types = require('../mocks/types.json');
const dashboard = require('../mocks/dashboard.json');


const router = require('express').Router();
const fs = require('fs');
const utils = require('../utils/utils.js');

router.use((req, res, next) => {
  console.log('Endpoint: ' + req.rawHeaders[1] + req.url);
  next();
});

router.use('/states', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(states))
});

router.use('/types', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(types));
});

router.use('/dashboard', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(dashboard)) 
});

router.use('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({
    "host": req.rawHeaders[1],
    "endpoints":[
      '/states',
      '/types',
      '/dashboard'
  ]}))
});

module.exports = router;
