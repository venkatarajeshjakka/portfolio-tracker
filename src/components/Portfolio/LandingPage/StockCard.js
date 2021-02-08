import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
  makeStyles,
  CardActionArea
} from "@material-ui/core";
import { WorkOutlineOutlined as WorkOutlineOutlinedIcon } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../../extensions/Formatters";
import DisplayItemSection from "../DisplayItemSection";

const useStyles = makeStyles(theme => ({
  root: ({ color }) => ({
    display: "flex",
    flexDirection: "column",
    borderRadius: "1.5rem",
    boxShadow: "0 8px 24px 0 rgba(0,0,0,0.12)"
  }),
  statsItem: {
    alignItems: "center",
    display: "flex"
  },
  statsIcon: {
    marginRight: theme.spacing(1)
  },
  red: {
    color: "#ff0000",
    paddingRight: theme.spacing(1)
  },
  green: {
    color: "#32cd32",
    paddingRight: theme.spacing(1)
  },
  heading: {
    color: "#33B5FF",
    textTransform: "uppercase"
  },
  price: {
    color: "#040E5E"
  },
  actionArea: {
    borderRadius: "1.5rem",
    transition: "0.2s",
    height: "100%"
  }
}));

const StockCard = props => {
  const { className, staticContext, product, ...rest } = props;

  const classes = useStyles();
  return (
    <CardActionArea
      component={Link}
      to={`/position-details/${product.stockCode}`}
      className={classes.actionArea}
    >
      <Card className={clsx(classes.root, className)} {...rest}>
        <CardContent>
          <Typography
            className={classes.heading}
            align={"center"}
            gutterBottom
            variant="h6"
          >
            {product.stockName}
          </Typography>
          <Typography
            className={classes.price}
            align={"center"}
            gutterBottom
            variant="h5"
          >
            {formatCurrency(product.ltp)}
          </Typography>

          <Grid container justify="center" alignItems="center" spacing={3}>
            <Grid item>
              <Typography
                className={product.change > 0 ? classes.green : classes.red}
                gutterBottom
                variant="h6"
              >
                {formatCurrency(product.change)}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                className={product.change > 0 ? classes.green : classes.red}
                gutterBottom
                variant="h6"
              >
                {product.changePercentage} %
              </Typography>
            </Grid>
          </Grid>

          <Box flexGrow={1}>
            <Grid container justify="space-between" spacing={2}>
              <Grid item>
                <DisplayItemSection
                  label={"Investment"}
                  value={formatCurrency(product.investment)}
                />
                <DisplayItemSection
                  label={"Daily Gain"}
                  value={formatCurrency(product.dailyGain)}
                  textStyle={
                    product.dailyGain > 0 ? classes.green : classes.red
                  }
                />
              </Grid>
              <Grid item>
                <DisplayItemSection
                  label={"Current Value"}
                  value={formatCurrency(product.current)}
                />
                <DisplayItemSection
                  label={"Returns"}
                  value={`${formatCurrency(product.profitOrLoss)}(${
                    product.profirOrLossPercentage
                  } %)`}
                  textStyle={
                    product.profitOrLoss > 0 ? classes.green : classes.red
                  }
                />
              </Grid>
            </Grid>
          </Box>
        </CardContent>
        <Box flexGrow={1} />
        <Divider light />
        <Box p={2}>
          <Grid container justify="space-between" spacing={2}>
            <Grid className={classes.statsItem} item>
              <WorkOutlineOutlinedIcon
                className={classes.statsIcon}
                color="primary"
              />
              <Typography
                color="textSecondary"
                display="inline"
                variant="body2"
              >
                {product.quantity}
              </Typography>
            </Grid>

            <Grid className={classes.statsItem} item>
              <Typography
                color="textSecondary"
                display="inline"
                variant="body2"
              >
                {`Avg.${formatCurrency(product.avgPrice)}`}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </CardActionArea>
  );
};

StockCard.propTypes = {
  className: PropTypes.string,
  product: PropTypes.object.isRequired
};

export default StockCard;
export { StockCard };
