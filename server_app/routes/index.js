var express = require('express');
var indexCtrl = require('../controllers/main.js');
var router = express.Router();

/* GET home page. */
router.get('/', indexCtrl.index);

/* GET data page. */
router.get('/data', indexCtrl.data)

module.exports = router;

