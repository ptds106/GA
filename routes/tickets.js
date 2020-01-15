var express = require('express')
var router = express.Router()
var ticketsCtrl = require('../controllers/tickets')

router.post('/', ticketsCtrl.create)
router.get('/new', ticketsCtrl.new)
router.post('/:id', ticketsCtrl.addToFlight)

module.exports = router
