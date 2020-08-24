const axios = require("axios");

const headers = {
  "X-Requested-With": "XMLHttpRequest",
  Referer: "https://www.nseindia.com/ChartApp/install/charts/mainpage.jsp",
  Host: "www.nseindia.com"
};
const instance = axios.create({
  baseURL: "https://www1.nseindia.com",
  timeout: 10000,
  headers
});

module.exports = { instance };
