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
export { formattData, stockList };
