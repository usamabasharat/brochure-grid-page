const express = require('express');
const app = express();
const routes = require("./routes/index");
const { backendPort } = require('../const');

// Define a single endpoint to fetch city-product-grid data
app.use("/", routes);


// Start the server
app.listen(backendPort, () => {
  console.log(`Web API server is running on http://localhost:${backendPort}`);
});
