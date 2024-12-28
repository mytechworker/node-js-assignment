const { getAllCountries } = require("../services/countriesService");

const salesRepLogic = async (req, res) => {
  try {
    const countries = await getAllCountries();

    if (!countries || countries.length === 0) {
      return res.status(200).json({ message: "No countries available" });
    }

    const groupedRegions = countries.reduce((acc, country) => {
      acc[country.region] = acc[country.region] || [];
      acc[country.region].push(country.name);
      return acc;
    }, {});

    const result = Object.entries(groupedRegions).map(
      ([region, countryList]) => {
        const totalCountries = countryList.length;

        const minSalesReq = Math.ceil(totalCountries / 7);
        const maxSalesReq = Math.ceil(totalCountries / 3);

        return {
          region,
          minSalesReq,
          maxSalesReq,
        };
      }
    );

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { salesRepLogic };
