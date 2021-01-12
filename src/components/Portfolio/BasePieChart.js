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

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
    boxShadow: "0 8px 24px 0 rgba(0,0,0,0.12)",
    borderRadius: "1.5rem"
  },
  labelStyle: {
    paddingLeft: theme.spacing(1)
  }
}));

const styles = makeStyles(theme => ({
  root: {
    display: "flex",
    alignSelf: "baseline",
    borderStyle: "solid",
    borderWidth: 2,
    padding: 4,
    borderRadius: "50%",
    margin: 5,
    backgroundColor: props => props.background,
    color: props => props.background
  }
}));

const DotCircle = ({ className, ...props }) => {
  const classes = styles(props);
  return <span className={clsx(classes.root, className)} />;
};
const BasePieChart = ({
  className,
  data,
  values,
  labels,
  colorsArray,
  title,
  ...rest
}) => {
  const classes = useStyles();
  const theme = useTheme();

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
      <CardHeader title={title} />
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
              {data.map(({ color, title, value }) => (
                <Box display="flex" key={title} p={1} textAlign="left">
                  <DotCircle background={color} />
                  <Typography color="textPrimary" variant="body2">
                    {title}
                  </Typography>

                  <div className={classes.labelStyle}>
                    <Typography color="textPrimary" variant="body2">
                      {value}%
                    </Typography>
                  </div>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

BasePieChart.propTypes = {
  className: PropTypes.string
};

export default BasePieChart;
