const express = require('express');
const app = express();
const routes = require("./routes/index");
const { cmsPort } = require('../const');

app.use("/", routes);

// Start the server
app.listen(cmsPort, () => {
  console.log(`Web CMS server is running on http://localhost:${cmsPort}`);
});
