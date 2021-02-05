'use strict';

const mongoose = require('mongoose');

// we define a schema for our document
const advertisementSchema = mongoose.Schema({
    nombre: String,
    venta: Boolean,
    precio: Number,
    foto: String,
    tags: [String]
});

// list of ads
advertisementSchema.statics.list = function() {
  const query = Advertisement.find();
  return query.exec();
}

// we create the model
const Advertisement = mongoose.model('Advertisement', advertisementSchema);

module.exports = Advertisement;
