import _ from "underscore";

const getformattedStockArray = data => {
  var formattedData = data.map(item => {
    return {
      id: item.id,
      stockName: item.data.stockName,
      stockCode: item.data.stockCode,
      date: new Date(item.data.date),
      stockPrice: item.data.stockPrice
    };
  });

  return formattedData;
};

const getStockCodeArray = data => {
  var response = getformattedStockArray(data);
  var stockCodeArray = _.pluck(response, "stockCode");
  return stockCodeArray;
};
export { getStockCodeArray, getformattedStockArray };
