var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    methodOverride  = require("method-override"),
    routes = require('./routes/index'),
    mongoose        = require('mongoose');

// Connection to DB
mongoose.connect('mongodb://localhost/tvshows', function(err, res) {
  if(err) throw err;
  console.log('Connected to Database');
});

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());

// Import Models and controllers
var models = require('./models/tvshow')(app, mongoose);

// Example Route
var router = express.Router();
router.get('/', function(req, res) {
  res.send("Hello world!");
});

app.use(router);

// Start server
app.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});

routes(app);
