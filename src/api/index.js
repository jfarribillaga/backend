'use strict';

const request = require('request');

const bearer = 'BEARER eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjU0NzA2MTUsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJqdWFuQHRha2VwYXJ0LmNvbS5hciJ9.EqmkqlVDR4mzlLQOPrKL92zx2raZOPfIAEgCDsVHJKI5SQevBE3Mu9tfz66nP4qp_I-mrI128t3ssQ4dVamdtw';

const apiUSD = 'http://api.estadisticasbcra.com/usd';

const router = require('express').Router();

router.use((req, res, next) => {
  console.log('Endpoint: ' + req.rawHeaders[1] + req.url);
  next();
});

router.use('/usd', (req, res) => {
  var options = {
    url: apiUSD,
    headers: {
      'Authorization': bearer
    }
  };

  const callback = (error, response, body) => {
    console.log(error);
    console.log(response);
    return response;
  }

  // res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  request(options, callback).pipe(res);
});

router.use('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({
    "host": req.rawHeaders[1],
    "endpoints":[
      '/usd'
  ]}))
});

module.exports = router;
