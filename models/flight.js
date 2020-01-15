const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scheduleSchema = new Schema({
  arrival: {type: String,}
  },
  );

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
  arrival: {scheduleSchema} ,
  ticket: [{type: Schema.Types.ObjectId, ref: 'Ticket'}]
});

module.exports = mongoose.model("Flight", flightsSchema);

