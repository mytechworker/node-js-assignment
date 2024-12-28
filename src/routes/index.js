const express = require("express");
const router = express.Router();
const { getCountries } = require("../controllers/countriesController");
const { salesRepLogic } = require("../controllers/salesRepController");
const { optimalDistribution } = require("../controllers/optimalController");

router.get("/countries", getCountries);

router.get("/salesrep", salesRepLogic);

router.get("/optimal", optimalDistribution);

module.exports = router;
