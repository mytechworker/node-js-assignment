const { getAllCountries } = require("../services/countriesService");

const optimalDistribution = async (req, res) => {
  try {
    const countries = await getAllCountries();
    const groupedRegions = countries.reduce((acc, country) => {
      acc[country.region] = acc[country.region] || [];
      acc[country.region].push(country.name);
      return acc;
    }, {});

    const result = Object.entries(groupedRegions).map(
      ([region, countryList]) => ({
        region,
        countryList,
        countryCount: countryList.length,
      })
    );

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
module.exports = { optimalDistribution };
