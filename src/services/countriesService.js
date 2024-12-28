const Country = require("../models/country");

const getAllCountries = async (region) => {
  const filter = region ? { region } : {};
  return await Country.find(filter).select("-_id name region");
};

module.exports = {
  getAllCountries,
};
