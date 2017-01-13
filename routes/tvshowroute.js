var express = require('express');
var router = express.Router();
var controller = require('../controllers/tvshows');

router.route('/tvshows')
  .get(controller.findAllTVShows)
  .post(controller.addTVShow);

router.route('/tvshows/:id')
  .get(controller.findById)
  .put(controller.updateTVShow)
  .delete(controller.deleteTVShow);

module.exports = router;
