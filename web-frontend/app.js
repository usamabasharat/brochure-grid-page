const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');
const { frontEndPort, pageNotFound, internalServerError, paramRequired, backendBaseURL } = require('../const');

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

const apiClient = axios.create({
  baseURL: backendBaseURL
});
// Routes for API
app.get('/city-product-grid/:city/:product', async (req, res, next) => {
  let { city, product } = req.params;
  if (!city || !product) {
   return res.status(400).send({ message: paramRequired });
}
  const apiData = await apiClient.get(`/city-product-grid/${city}/${product}`);

  if (apiData.data.status === 500 || apiData.data.status === 404){
    res.render('error', { status: apiData.data.status, message: apiData.data.message});
  } else {
    res.render('index', { city: apiData.data.city, product: apiData.data.product, brochures: apiData.data.brochures});
  }
})

// Handle 404 errors
app.use((req, res, next) => {
  res.status(404).render('error', { status: 404, message: pageNotFound });
});

// Handle 500 errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('error', { status: 500, message: internalServerError });
});

// Start the server
app.listen(frontEndPort, () => {
  console.log(`Web frontend server is running on http://localhost:${frontEndPort}`);
});
