const Flight = require("../models/flight");
var Ticket = require('../models/ticket')

const newFlight = (req, res) => {
  res.render("flights/new");
};
const index = (req, res) => {
  Flight.find({}, (err, flight) => {
    if (err) {
      res.render("error");
    }
    const sortedFlights = flight.sort((a, b) => (a.departure > b.departure) ? 1 : -1)
    res.render("flights", {
      flightsInfo: sortedFlights,
      id: req.params.id,

    });
  });

}
const edit = (req, res) => {
  Flight.findById(req.params.id, (err, flight) => {
    res.render("flights/edit", {
      title: "flight Edit",
      flight,
      id: req.params.id
    });
  });
};

const show = (req, res) => {
  Flight.findById(req.params.id)
    .populate('ticket')
    .exec((err, flight) => {
      Ticket.find({ _id: { $nin: flight.ticket } }).exec((err, tickets) => {
        res.render('flights/show', {
          title: 'Flight Detail',
          flight,
          tickets,
        })
      })
    })
}


const create = (req, res) => {
   console.log(req.body)
  const flight = new Flight(req.body);
  flight.save(err => {
    if (err) return res.redirect("flights/new");
    res.redirect("/flights");
  });
};

const deleteFlight = (req, res) => {
   Flight.findOneAndDelete({'_id': req.params.id},(err, deletedItem) =>{

   })
      res.redirect("/flights")
  }
  // )}

const update = (req, res) => {
  console.log(req.body)
    Flight.findByIdAndUpdate(req.params.id, req.body,{new:true}, (err, flight) => {
    if(err) return res.status(500).send(err);

      res.redirect(`/flights/${req.params.id}`);
  }
)}

module.exports = {
  new: newFlight,
  create,
  index,
  show,
  edit,
  update,
  delete: deleteFlight,
};
