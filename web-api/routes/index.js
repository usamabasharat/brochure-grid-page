const express = require("express");
const { getCityProductController } = require("../controller/cityProductController");
const router = express.Router();

module.exports = router;

router.get("/city-product-grid/:city/:product", getCityProductController);
