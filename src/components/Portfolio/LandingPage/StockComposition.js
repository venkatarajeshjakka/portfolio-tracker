import React from "react";
import PropTypes from "prop-types";
import _ from "underscore";
import { BasePieChart } from "../Base";

const StockComposition = ({ className, data, ...rest }) => {
  var sectors = data.map(item => {
    var r = Math.floor(Math.random() * 200);
    var g = Math.floor(Math.random() * 200);
    var b = Math.floor(Math.random() * 200);
    var color = "rgb(" + r + ", " + g + ", " + b + ")";
    return {
      title: item.stockCode,
      value: item.percentage,
      color: color
    };
  });

  var labels = _.pluck(data, "stockName");
  var values = _.pluck(sectors, "value");
  var colorsArray = _.pluck(sectors, "color");

  return (
    <BasePieChart
      title={"Stock Weightage"}
      values={values}
      labels={labels}
      colorsArray={colorsArray}
      data={sectors}
    />
  );
};

StockComposition.propTypes = {
  className: PropTypes.string
};

export default StockComposition;
export { StockComposition };
