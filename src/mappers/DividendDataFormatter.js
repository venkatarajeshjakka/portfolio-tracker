import _ from "underscore";

const formatDividendData = data => {
  var formattedData = data.map(item => {
    return {
      id: item.id,
      stockName: item.data.stockName,
      amount: Number(item.data.amount),
      date: new Date(item.data.date.seconds * 1000)
    };
  });

  var sortedResult = _.sortBy(formattedData, "date").reverse();
  return sortedResult;
};

const totalDividendAmount = data => {
  var response = formatDividendData(data);
  var amountArray = _.pluck(response, "amount");

  var sum = _.reduce(
    amountArray,
    function(memo, num) {
      return memo + num;
    },
    0
  );

  return sum;
};
export { formatDividendData, totalDividendAmount };
