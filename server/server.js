const express = require('express');

// Initial express port
let PORT = process.env.PORT || 3001

// Create instance of express
const app = express();

// Initialize Server
app.listen(PORT, console.log(`Server started on ${PORT}`))