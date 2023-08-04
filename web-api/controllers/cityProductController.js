const { internalServerError, paramRequired, dataNotFound } = require("../../const");
const { getCityData, getProductData, getBrouchersData } = require("../services/cmsApiService");

const getCityProductController = async (req, res, next) => {
  try {
    let { city, product } = req.params;
    if (!city || !product) {
     return res.status(400).send({ message: paramRequired });
  }
    let long = req.query?.long;
    let lat = req.query?.lat;
    lat = lat ? lat : '100';
    long = long ? long : '100';
     city = city.replace(/^./, city[0].toUpperCase())
    product = product.replace(/^./, product[0].toUpperCase())
    // Fetch data from web-CMS
    const cityData = await getCityData(city);
    const productData = await getProductData(product);

    // Check if city and product data exist in the CMS
    if (cityData.data.status === 404 || productData.data.status === 404) {
      return res.json({status:404, message: dataNotFound });
    }

    // Fetch dynamic brochure data from Bonial-internal content API (fake response data provided in the appendix)
    const brochureData = await getBrouchersData(product, long, lat);
    const brochures = brochureData.data;

    // Prepare the response JSON
    const response = {
      city: cityData.data,
      product: productData.data,
      brochures,
    };

    return res.json(response);
  } catch (err) {
    console.error(err);
    return res.json({ status:500, message: internalServerError });
  }
};

module.exports = { getCityProductController }