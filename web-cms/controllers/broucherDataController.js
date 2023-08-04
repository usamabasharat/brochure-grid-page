const { missingParams, noBrouchers } = require("../../const");
const { brochures } = require("../database");
const { getBrouchers } = require("../services/cmsServices");

const getBroucherDataController = (req, res) => {
  const {query, long, lat} = req.query;
  if (!query || !long || !lat) {
    return res.json({status:404, message: missingParams });
  }
    const brouchersData = getBrouchers(query, long, lat);
    if (brouchersData) {
      return res.json(brouchersData);
    } else {
      return res.json({status:404, message: noBrouchers });
    }
};

module.exports = getBroucherDataController;