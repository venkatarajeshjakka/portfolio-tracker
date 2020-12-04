import _ from "underscore";
import moment from "moment";
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

const filteredAmount = input => {
  var amountArray = _.pluck(input, "amount");

  var sumValue = sum(amountArray);

  return sumValue;
};

const filteredYearlyData = (inputValue, year) => {
  var filteredData = _.filter(inputValue, function(input) {
    return input.date.getFullYear() === year;
  });

  return filteredData;
};

const quarterlyFiltertedData = (data, currentQuarter) => {
  var filteredData = _.filter(data, function(input) {
    return moment(input.date).quarter() === currentQuarter;
  });

  return filteredData;
};

const changePercentage = (current, previous) => {
  var yearlyChange = current - previous;

  var changePercentage = ((yearlyChange / previous) * 100).toFixed(2);

  return changePercentage;
};
const dividendInformation = data => {
  var response = formatDividendData(data);

  var groupedResponse = _.groupBy(response, "stockName");

  var keys = Object.keys(groupedResponse);
  var mapped = keys.map(item => {
    var individual = _.where(response, { stockName: item });
    return { stockName: item, data: individual };
  });

  var mappedResponse = mapped.map(item => {
    var individualamountArray = _.pluck(item.data, "amount");
    var response = {
      stockName: item.stockName,
      amount: sum(individualamountArray)
    };
    return response;
  });

  var amountArray = _.pluck(response, "amount");
  var totalAmount = sum(amountArray);
  var d = new Date();
  var n = d.getFullYear();
  var previousYear = n - 1;

  var currentQuarter = moment(n).quarter();

  var currentYearFilteredData = filteredYearlyData(response, n);

  var quarterFilteredData = quarterlyFiltertedData(
    currentYearFilteredData,
    currentQuarter
  );

  var currentYearQuarterlyAmount = filteredAmount(quarterFilteredData);

  var currentYearAmount = filteredAmount(currentYearFilteredData);

  var previousYearFilteredData = filteredYearlyData(response, previousYear);

  var previousYearQuarterFilteredData = quarterlyFiltertedData(
    previousYearFilteredData,
    currentQuarter
  );

  var previousYearQuarterlyAmount = filteredAmount(
    previousYearQuarterFilteredData
  );

  var previousYearAmount = filteredAmount(previousYearFilteredData);

  var yearlyChangePercentage = changePercentage(
    currentYearAmount,
    previousYearAmount
  );
  var quarterlyChangePercentage = changePercentage(
    currentYearQuarterlyAmount,
    previousYearQuarterlyAmount
  );

  return {
    totalAmount,
    currentYearAmount,
    previousYearAmount,
    yearlyChangePercentage,
    currentYearQuarterlyAmount,
    previousYearQuarterlyAmount,
    quarterlyChangePercentage,
    groupedResponse: mappedResponse
  };
};
export { formatDividendData, dividendInformation };
