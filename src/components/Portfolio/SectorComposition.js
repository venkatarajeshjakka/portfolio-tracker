import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { Doughnut } from "react-chartjs-2";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  colors,
  makeStyles,
  useTheme
} from "@material-ui/core";
import _ from "underscore";
const useStyles = makeStyles(() => ({
  root: {
    height: "100%"
  }
}));

const SectorComposition = ({ className, data, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();

  var sectors = data.map(item => {
    var r = Math.floor(Math.random() * 200);
    var g = Math.floor(Math.random() * 200);
    var b = Math.floor(Math.random() * 200);
    var color = "rgb(" + r + ", " + g + ", " + b + ")";
    return {
      title: item.sector,
      value: item.percentage,
      color: color
    };
  });

  var labels = _.pluck(sectors, "title");
  var values = _.pluck(sectors, "value");
  var colorsArray = _.pluck(sectors, "color");

  const dataSetResponse = {
    datasets: [
      {
        data: values,
        backgroundColor: colorsArray,
        borderWidth: 8,
        borderColor: colors.common.white,
        hoverBorderColor: colors.common.white
      }
    ],
    labels: labels
  };

  const options = {
    animation: false,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    legend: {
      display: false
    },
    maintainAspectRatio: false,
    responsive: true,
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
      <CardHeader title="Traffic by Device" />
      <Divider />
      <CardContent>
        <Box height={300} position="relative">
          <Doughnut data={dataSetResponse} options={options} />
        </Box>
        <Box display="flex" justifyContent="center" mt={2}>
          {sectors.map(({ color, title, value }) => (
            <Box key={title} p={1} textAlign="center">
              <Typography color="textPrimary" variant="body1">
                {title}
              </Typography>
              <Typography style={{ color }} variant="h2">
                {value}%
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

SectorComposition.propTypes = {
  className: PropTypes.string
};

export default SectorComposition;
