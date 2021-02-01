var express = require('express');
var app = require('express')();
var session = require('express-session');
var passport = require('passport');
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var mongoose = require('mongoose')

// Initial express port
let PORT = process.env.PORT || 3001

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use('/users', require('./routes/users'));

// Inital database connection
var MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/Dogstr';

// Connect to our database
mongoose.connect(MONGODB_URI);


// Get the default connection
var db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Initialize Server
http.listen(PORT, function() {
    console.log(`Express is running on port ${PORT}`);
});