var app = require('../../app');

// Import the Zip model
var Zip = require('../models/zip')

// Find all Zips given a state code, e.g., FL, NY, WA, etc.
module.exports.zipsByState = function(req, res) {
    Zip.find({ state: req.params.state }, function (err, zips) {
        if (err) {
            return console.error(err);
        }
        else {
            // Will render JSON in the response
            res.json(zips);
        }
    });
}

