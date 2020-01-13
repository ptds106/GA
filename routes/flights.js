const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights');

// GET /movies/new
router.get('/new', flightsCtrl.new);
router.get('/', flightsCtrl.index);

router.post('/', flightsCtrl.create);
router.get('/:id', flightsCtrl.show);
router.get('/:id/edit', flightsCtrl.edit)
router.put('/:id/update', flightsCtrl.update)

router.delete('/:id/delete', flightsCtrl.delete)

module.exports = router;