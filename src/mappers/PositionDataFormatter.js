import _ from "underscore";

const formattData = data => {
  var formatterResponse = data.map(item => {
    return {
      id: item.id,
      stockName: item.data.stockName,
      buyPrice: parseFloat(item.data.buyPrice),
      modifiedDate: new Date(item.data.modifiedDate),
      quantity: parseInt(item.data.quantity, 10),
      stockCode: item.data.stockCode,
      stopLoss: parseFloat(item.data.stopLoss),
      targetPrice: parseFloat(item.data.targetPrice),
      trailingStopLoss: parseFloat(item.data.trailingStopLoss),
      date: new Date(item.data.date.seconds * 1000)
    };
  });
  return formatterResponse;
};

const stockList = data => {
  let grouped = _.groupBy(data, "stockCode");
  return Object.keys(grouped);
};

const sum = input => {
  return _.reduce(
    input,
    function(memo, num) {
      return memo + num;
    },
    0
  );
};
const stockResponse = (stockData, portfolioStockInfo, stockCode) => {
  const {
    longName,
    regularMarketChange,
    regularMarketChangePercent,
    regularMarketPrice
  } = stockData.data.price;

  var quantityArray = _.pluck(portfolioStockInfo, "quantity");
  var quantitySum = sum(quantityArray);
  var investmentArray = portfolioStockInfo.map(item => {
    return item.buyPrice * item.quantity;
  });

  var investment = sum(investmentArray);

  var averagePrice = investment / quantitySum;

  var dailyGain = quantitySum * regularMarketChange;
  var currentValue = quantitySum * regularMarketPrice;
  var profitOrLoss = currentValue - investment;
  var cardResponse = {
    quantity: quantitySum,
    stockCode,
    stockName: longName,
    ltp: regularMarketPrice,
    change: regularMarketChange,
    changePercentage: (regularMarketChangePercent * 100).toFixed(2),
    avgPrice: averagePrice,
    dailyGain: dailyGain,
    investment: investment,
    current: currentValue,
    profitOrLoss
  };

  return cardResponse;
};
export { formattData, stockList, stockResponse };
