var Ticket = require('../models/ticket')
var Flight = require('../models/flight')

const addToFlight = (req, res) => {
  console.log("this is seats: ",req.body.seats)
  Flight.findById(req.params.id, (err, flight) => {
     flight.ticket.push(req.body.seats);
    flight.save(err => {
      res.redirect(`/flights/${flight._id}`)
    })
  })
}
// const addToCast = (req, res) => {
//   Movie.findById(req.params.id, (err, movie) => {
//     movie.cast.push(req.body.performerId)
//     movie.save(err => {
//       res.redirect(`/movies/${movie._id}`)
//     })
//   })
// }

// const create = (req, res) => {3
//   var s = req.body.born
//   req.body.born = `${s.substr(5, 2)}-${s.substr(8, 2)}-${s.substr(0, 4)}`
//   Ticket.create(req.body, (err, performer) => {
//     res.redirect('/tickets/new')
//   })
// }
const create = (req,res) => {
   console.log(req.body)
   var s = req.body.seat
   Ticket.create(req.body, (err, ticket) => {
     res.redirect('/flights')
    });
  }

const newTicket = (req, res) => {
  Ticket.find({}, (err, tickets) => {
    res.render('flights/tickets/new', {
      title: 'Add Tickets',
      tickets,
    })
  })
}

module.exports = {
  new: newTicket,
  create,
  addToFlight,
}
