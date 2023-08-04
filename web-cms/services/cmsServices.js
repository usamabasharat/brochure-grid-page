const { cities, products, brochures } = require("../database");

const getCities = (city) => cities.find((data) => data.name==city);
const getProducts = (product) => products.find((data) => data.name==product);
const getBrouchers = (query, long, lat) => brochures.filter((data) => (data.title === query && data.long === long && data.lat === lat));

module.exports = { getCities,getProducts,getBrouchers}