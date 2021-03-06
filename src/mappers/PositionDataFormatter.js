import _ from "underscore";
import { getFormattStockData } from "./WatchListDataFormatter";
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
    regularMarketPrice,
    regularMarketDayHigh,
    regularMarketDayLow,
    regularMarketPreviousClose
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
  var profirOrLossPercentage = profitLossPercentage(profitOrLoss, investment);
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
    profitOrLoss,
    profirOrLossPercentage,
    dayHigh : regularMarketDayHigh,
    dayLow : regularMarketDayLow,
    previousClose : regularMarketPreviousClose
  };

  return cardResponse;
};
const profitLossPercentage = (profitOrLoss, investment) => {
  return ((profitOrLoss / investment) * 100).toFixed(2);
};

const getStockDetails = (product, stockDataResponse) => {
  var stockCode = product + ".NS";
  var stockData = getFormattStockData(stockDataResponse);
  var data = _.findWhere(stockData, { stockCode: stockCode });
  const {
    regularMarketChange,
    regularMarketChangePercent,
    regularMarketPrice
  } = data.data.price;
  return {
    ltp: regularMarketPrice,
    change: regularMarketChange,
    changePercentage: (regularMarketChangePercent * 100).toFixed(2)
  };
};
const stockSummary = (stockKeys, stockDataResponse, positionData) => {
  var stockArray = stockKeys.map(product => {
    var stockCode = product + ".NS";
    var stockData = getFormattStockData(stockDataResponse);
    var data = _.findWhere(stockData, { stockCode: stockCode });
    var portfolioStockInfo = _.where(positionData, {
      stockCode: product
    });
    if (data) {
      var cardResponse = stockResponse(data, portfolioStockInfo, product);
      return cardResponse;
    }
  });

  if (stockArray) {
    var dailyGainArray = _.pluck(stockArray, "dailyGain");
    let dailyGain = sum(dailyGainArray);
    var investmentArray = _.pluck(stockArray, "investment");
    let investment = sum(investmentArray);
    var currentValueArray = _.pluck(stockArray, "current");
    let currentValue = sum(currentValueArray);
    var profitLossArray = _.pluck(stockArray, "profitOrLoss");
    let profitLoss = sum(profitLossArray);
    let profitOrLossPercentage = profitLossPercentage(profitLoss, investment);
    let dailyProfitOrLossPercentage = profitLossPercentage(
      dailyGain,
      currentValue
    );
    return {
      dailyGain,
      investment,
      currentValue,
      profitLoss,
      profitOrLossPercentage,
      dailyProfitOrLossPercentage
    };
  }
};
const individualPosition = (positionData, ltp, change) => {
  const { buyPrice, quantity, targetPrice } = positionData;

  var difference = targetPrice - ltp;
  let targetPercentage = 100;
  if (difference > 0) {
    var percentage = (difference / ltp) * 100;
    targetPercentage = 100 - percentage.toFixed(2);
  }

  var currentValue = quantity * ltp;
  var investmentValue = quantity * buyPrice;
  let profitOrLoss = currentValue - investmentValue;
  var profirOrLossPercentage = ((profitOrLoss / investmentValue) * 100).toFixed(
    2
  );
  var dailyProfitOrLoss = quantity * change;
  var individualPositionResponse = {
    targetPercentage,
    currentValue,
    investmentValue,
    profitOrLoss,
    profirOrLossPercentage,
    dailyProfitOrLoss
  };

  return individualPositionResponse;
};
export {
  formattData,
  stockList,
  stockResponse,
  individualPosition,
  stockSummary,
  getStockDetails
};
