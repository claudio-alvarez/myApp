var express = require('express');
var router = express.Router();
var api = require('../controllers/api');

router.get('/zips/:state', api.zipsByState);

module.exports = router;

