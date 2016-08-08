'use strict';

const appointmentListObj = require('../data/appointmentList001.json');
const locationsListObj = require('../data/retrieveLocations_404362.json');
const topicsObj = require('../data/retrieveTopics001.json');
const router = require('express').Router();
const fs = require('fs');

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


module.exports = router;
