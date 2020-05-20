const express = require("express");
const path = require("path");
const fetch = require("node-fetch");
require("dotenv").config();

const app = express();
app.use(express.static(path.join(__dirname, "client/build")));

const api_key = process.env.API_KEY;
const sb_api_key = process.env.SB_API_KEY;

app.get("/api/dailydata/:ticker/:time", async (req, res) => {
  const { ticker, time } = req.params;
  const fetch_response = await fetch(
    `https://sandbox.iexapis.com/stable/stock/${ticker}/chart/${time}?token=${sb_api_key}`
  );
  const data = await fetch_response.json();
  res.json(data);
});

app.get("/api/info/:ticker", async (req, res) => {
  const { ticker } = req.params;
  const response = await fetch(
    `https://sandbox.iexapis.com/stable/stock/${ticker}/company?token=${sb_api_key}`
  );
  const data = await response.json();
  res.json(data);
});

app.get("/api/logo/:ticker", async (req, res) => {
  const { ticker } = req.params;
  const response = await fetch(
    `https://cloud.iexapis.com/stable/stock/${ticker}/logo?token=${api_key}`
  );
  const data = await response.json();
  res.json(data);
});

app.get("/api/price/:ticker", async (req, res) => {
  const { ticker } = req.params;
  const response = await fetch(
    `https://sandbox.iexapis.com/stable/stock/${ticker}/price?token=${sb_api_key}`
  );
  const data = await response.json();
  res.json(data);
});

app.get("/api/news/:ticker", async (req, res) => {
  const { ticker } = req.params;
  const response = await fetch(
    `https://cloud.iexapis.com/stable/stock/${ticker}/news/last/3?token=${api_key}`
  );
  const data = await response.json();
  res.json(data);
});

const port = process.env.PORT || 5000;

app.listen(port, () => `Server running on port ${port}`);
