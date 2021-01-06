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
  useTheme,
  Grid
} from "@material-ui/core";
import _ from "underscore";
const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
    boxShadow: "0 8px 24px 0 rgba(0,0,0,0.12)",
    borderRadius: '1.5rem',
  }
}));

const styles = makeStyles({
  root: {
    display: "flex",
    alignSelf: "baseline",
    borderStyle: "solid",
    borderWidth: 2,
    padding: 4,
    borderRadius: "50%",
    margin: 5,
    backgroundColor: props => props.background,
    color: props => props.background,
    
  }
});

const DotCircle = ({ className, ...props }) => {
  const classes = styles(props);
  return <span className={clsx(classes.root, className)} />;
};
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
      <CardHeader title="Sector Composition" />
      <Divider />
      <CardContent>
        <Grid container justify="space-around" spacing={3}>
          <Grid item>
            <Box height={300} position="relative">
              <Doughnut data={dataSetResponse} options={options} />
            </Box>
          </Grid>
          <Grid item>
            <Box display="flex" flexDirection="column" mt={2}>
              {sectors.map(({ color, title, value }) => (
                <Box display="flex" key={title} p={1} textAlign="left">
                  <DotCircle background={color} />
                  <Typography color="textPrimary" variant="body2">
                    {title}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

SectorComposition.propTypes = {
  className: PropTypes.string
};

export default SectorComposition;
