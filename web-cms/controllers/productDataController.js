const { getProducts } = require("../services/cmsServices");

const getProductDataController = (req, res) => {
  const { product } = req.params;
  const productData =  getProducts(product);
  if (productData) {
    return res.json(productData);
  } else {
    return res.json({status:404, message: 'Product not found' });
  }
};

module.exports = getProductDataController;