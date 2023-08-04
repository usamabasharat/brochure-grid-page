const axios = require('axios');

// Define API client service for web-CMS and Bonial-internal content API
const cmsApiClient = axios.create({
  baseURL: 'http://localhost:3001', // Assuming web-CMS is running on port 3001
});

const getCityData = async (city) => await cmsApiClient.get(`/city/${city}`);
const getProductData = async (product) => await cmsApiClient.get(`/product/${product}`);
const getBrouchersData = async (product, long, lat) => await cmsApiClient.get(`/v1/brochures/search?query=${product}&long=${long}&lat=${lat}`);

module.exports = {getCityData, getProductData, getBrouchersData}