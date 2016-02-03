var mongoose = require('mongoose');

// Define the schema for ZIP code
var Schema = mongoose.Schema;

// The ZIP model contains city, state, population and location (GPS coordinates)
var ZipSchema = new Schema({
    "_id": String,
    "city": String,
    "state": String,
    "pop": Number,
    "loc": []
});

// We export this model to make it available to the controller
module.exports = mongoose.model('Zip', ZipSchema);

