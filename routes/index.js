module.exports = function(app) {
  var tvshows = require('../routes/tvshowroute');
  app.use('/tvshows-api', tvshows);
};
