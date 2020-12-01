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

  return sum(amountArray);
};

const sum = input => {
  var sum = _.reduce(
    input,
    function(memo, num) {
      return memo + num;
    },
    0
  );

  return sum;
};

const filteredAmount = (inputValue, year) => {
  var filteredData = _.filter(inputValue, function(input) {
    return input.date.getFullYear() === year;
  });

  var amountArray = _.pluck(filteredData, "amount");

  var sumValue = sum(amountArray);

  return sumValue;
};
const dividendInformation = data => {
  var response = formatDividendData(data);
  var amountArray = _.pluck(response, "amount");
  var totalAmount = sum(amountArray);
  var d = new Date();
  var n = d.getFullYear();
  var previousYear = n - 1;

  var currentYearAmount = filteredAmount(response, n);

  var previousYearAmount = filteredAmount(response, previousYear);

  var yearlyChange = currentYearAmount - previousYearAmount;

  var yearlyChangePercentage = (
    (yearlyChange / previousYearAmount) *
    100
  ).toFixed(2);

  return {
    totalAmount,
    currentYearAmount,
    previousYearAmount,
    yearlyChangePercentage
  };
};
export { formatDividendData, totalDividendAmount, dividendInformation };
