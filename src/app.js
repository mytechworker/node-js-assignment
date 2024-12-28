const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const connectDB = require("./db/connection");

const app = express();

app.use(bodyParser.json());
app.use("/api", routes);

connectDB();

module.exports = app;
