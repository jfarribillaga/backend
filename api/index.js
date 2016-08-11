'use strict';

const appointmentListObj = require('../data/appointmentList001.json');
const appointmentBookedList = [
  require('../data/appointmentBooked01.json'),
  require('../data/appointmentBooked02.json')
];
const locationsListObj = require('../data/retrieveLocations_404362.json');
const topicsObj = require('../data/retrieveTopics001.json');
const router = require('express').Router();
const fs = require('fs');
const utils = require('../utils/utils.js');

router.use((req, res, next) => {
  console.log('Endpoint: ' + req.rawHeaders[1] + req.url);
  next();
});

router.use('/appointmentList', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(appointmentListObj))
});

router.use('/appointmentBooked', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(appointmentBookedList[utils.getRandomInt(0, appointmentBookedList.length)]));
});

router.use('/locations', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(locationsListObj)) 
});

router.use('/topics', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(topicsObj)) 
});

router.use('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({
    "host": req.rawHeaders[1],
    "endpoints":[
      '/appointmentList',
      '/appointmentBooked',
      '/locations',
      '/topics'
  ]}))
});

module.exports = router;
