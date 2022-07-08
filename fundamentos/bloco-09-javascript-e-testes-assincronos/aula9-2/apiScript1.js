const { data } = require("browserslist");
const fetch = require("node-fetch");

const fetchCoin = () => {
  const url = `https://api.coincap.io/v2/assets`;
  const coins = fetch(url)
    .then((response) => response.json())
    .then((data) => data.data);
};

fetchCoin();