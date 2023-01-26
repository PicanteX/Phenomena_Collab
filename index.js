// Use the dotenv package, to create environment variables

require('dotenv').config();


// Import express, and create a server

// Require morgan and body-parser middleware

// Have the server use morgan with setting 'dev'

// Import cors 
// Have the server use cors()

// Have the server use bodyParser.json()

const express = require ('express');
const server = express();
const morgan = require('morgan')
const cors = require('cors')
const {client} = require('./db')
const {PORT = 3000} = process.env;

client.connect();
server.use(morgan("dev"));
server.use(express.json());
server.use(cors());
// Create a constant variable, PORT, based on what's in process.env.PORT or fallback to 3000


server.use((req, res, next) => {
    console.log("<____Body Logger START____>");
    console.log(req.body);
    console.log("<_____Body Logger END_____>");
  
    next();
  });


// Have the server use your api router with prefix '/api'
const apiRouter = require('./api')
server.use("/api", apiRouter)
// Import the client from your db/index.js

// Create custom error handling that sets the status code to 500
// and returns the error as an object
// Create custom 404 handler that sets the status code to 404.



// Start the server listening on port PORT
// On success, connect to the database
server.listen(PORT, () => {
    console.log("the server is up on port", PORT);
  });