"use strict"; // Enforce strict version of javascript

// Setup environment variables
require("dotenv").config();


// setup app
const express = require("express");
const app = express();


/** @notice Import all the routers for the different routes and mount them onto the App */
const defaultRoute = require("./routes/default");

// Mount all the routes onto their respective base routes
app.use("/", defaultRoute);


const port = process.env.PORT || 3000;
const server = app.listen(port, () => console.log(`Server running on port: ${port}`));

module.exports = server; // Export Server object for use in tests.
