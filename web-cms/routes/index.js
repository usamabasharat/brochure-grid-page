const express = require("express");
const getCityDataController = require("../controllers/cityDataController");
const getProductDataController = require("../controllers/productDataController");
const getBroucherDataController = require("../controllers/broucherDataController");
const router = express.Router();

module.exports = router;

router.get("/city/:city", getCityDataController);
router.get("/product/:product", getProductDataController);
router.get("/v1/brochures/search", getBroucherDataController);
