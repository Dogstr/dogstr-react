var express = require('express');
var app = express();
var session = require('express-session');
var passport = require('passport');
var http = require('http').createServer(app);
var mongoose = require('mongoose')
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');


// Inital database connection
var MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/Dogstr';

// Connect to our database
mongoose.connect(MONGODB_URI);


// Get the default connection
var db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Initial express port
let PORT = process.env.PORT || 3001

// Parse application body as JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Express Session
app.use(
  session({
    secret: "secretcode",
    resave: false,
    saveUninitialized: true,
    maxAge: 1000 * 20 
  })
);

app.use(cookieParser("secretcode"))

// Initialize passport
app.use(passport.initialize());
app.use(passport.session());

//middleware for passport
require("./config/passport")(passport);

// Routes
app.use('/users', require('./routes/users'));
app.use('/parks', require('./routes/parks'));
app.use('/threads', require('./routes/threads'));
require('./routes/isAuth')(app);


// Initialize Server
http.listen(PORT, function() {
    console.log(`Express is running on port ${PORT}`);
});