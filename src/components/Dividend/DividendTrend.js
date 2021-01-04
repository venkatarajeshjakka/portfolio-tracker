import React from "react";
import { Bar } from "react-chartjs-2";
import clsx from "clsx";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  useTheme,
  makeStyles,
  colors
} from "@material-ui/core";
import _ from "underscore";

const useStyles = makeStyles(() => ({
  root: {
    height: "100%"
  }
}));
const formatData = (labels, data) => {
  return {
    labels: labels,
    datasets: [
      {
        label: "Dividend Amount in INR",
        backgroundColor: colors.indigo[500],
        data: data
      }
    ]
  };
};

const DividendTrend = ({ className, data, ...rest }) => {
  const { yearlyGroupedResponse } = data;

  var labels = _.pluck(yearlyGroupedResponse, "year");
  var values = _.pluck(yearlyGroupedResponse, "amount");
  const classes = useStyles();
  const theme = useTheme();
  var formattedData = formatData(labels, values);
  const options = {
    animation: false,
    cornerRadius: 20,
    layout: { padding: 0 },
    legend: { display: false },
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      xAxes: [
        {
          barThickness: 12,
          maxBarThickness: 10,
          barPercentage: 0.5,
          categoryPercentage: 0.5,
          ticks: {
            fontColor: theme.palette.text.secondary
          },
          gridLines: {
            display: false,
            drawBorder: false
          }
        }
      ],
      yAxes: [
        {
          ticks: {
            fontColor: theme.palette.text.secondary,
            beginAtZero: true,
            min: 0
          },
          gridLines: {
            borderDash: [2],
            borderDashOffset: [2],
            color: theme.palette.divider,
            drawBorder: false,
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2],
            zeroLineColor: theme.palette.divider
          }
        }
      ]
    },
    tooltips: {
      backgroundColor: theme.palette.background.default,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: "index",
      titleFontColor: theme.palette.text.primary
    }
  };
  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader title="Latest Dividend Trend" />
      <Divider />
      <CardContent>
        <Box height={525} position="relative">
          <Bar data={formattedData} options={options} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default DividendTrend;
