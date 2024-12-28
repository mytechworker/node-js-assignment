const { getAllCountries } = require("../services/countriesService");

const getCountries = async (req, res) => {
  try {
    const region = req.query.region;
    const countries = await getAllCountries(region);
    res.status(200).json(countries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getCountries };
