const mongoose = require("mongoose");
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;
const scheduleSchema = new Schema({
  arrival: {
    type: String,
    default: ""
  }
});

const flightsSchema = new Schema({
  arrivalAirport: { type: String, enum: ['AUS', 'DAL', 'LAX','SEA']},
  departureAirport: { type: String, enum: ['AUS', 'DAL', 'LAX','SEA'], default: 'SEA'},
  airline: { type: String, enum: ["American", "Southwest", "United"] },
  flightNumber: { type: Number, min: 10, max: 9999 },
  departure: {
    type: String,
    default: function() {
      return Number(new Date().getFullYear()) + 1;
    }
  },
    arrival: {scheduleSchema}
});

module.exports = mongoose.model("Flight", flightsSchema);

