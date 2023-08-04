const { noCity } = require("../../const");
const { getCities } = require("../services/cmsServices");

const getCityDataController = (req, res) => {
  const { city } = req.params;
  const cityData = getCities(city)

  if (cityData) {
    return res.json(cityData);
  } else {
    return res.json({status:404, message: noCity });
  }
}

module.exports = getCityDataController;