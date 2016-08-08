'use strict';

const appointmentListObj = require('../data/appointmentList001.json');
const locationsListObj = require('../data/retrieveLocations_404362.json');
const topicsObj = require('../data/retrieveTopics001.json');
const router = require('express').Router();
const fs = require('fs');

router.use(function timeLog(req, res, next) {
  console.log('Endpoint: ' + req.rawHeaders[1] + req.url);
  next();
});

router.use('/appointmentList', function getAppointments(req, res){
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(appointmentListObj))
});

router.use('/locations', function getLocations(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(locationsListObj)) 
});

router.use('/topics', function getLocations(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(topicsObj)) 
});

router.use('/', function getAppointments(req, res){
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({"endpoints":[
    'appointmentList',
    'locations',
    'topics'
  ]}))
});

module.exports = router;
