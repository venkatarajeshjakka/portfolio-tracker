import React from "react";
import PropTypes from "prop-types";
import Color from "color";
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
import {
  WorkOutlineOutlined as WorkOutlineOutlinedIcon,
  ArrowDropUpOutlined as ArrowDropUpOutlinedIcon,
  ArrowDropDownOutlined as ArrowDropDownOutlinedIcon
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../extensions/Formatters";
import DisplayItemSection from "./DisplayItemSection";

const useStyles = makeStyles(theme => ({
  root: ({ color }) => ({
    display: "flex",
    flexDirection: "column",
    borderRadius: 16,
    boxShadow: "none"
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
  iconRed: {
    color: "#ff0000"
  },
  iconGreen: {
    color: "#32cd32"
  },
  actionArea: {
    borderRadius: 16,
    transition: "0.2s"
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
          <Typography color="textPrimary" gutterBottom variant="h5">
            {product.stockName}
          </Typography>

          <Grid container justify="space-between" spacing={2}>
            <Grid className={classes.statsItem} item>
              <Typography
                className={product.change > 0 ? classes.green : classes.red}
                display="inline"
                variant="body1"
              >
                {formatCurrency(product.ltp)}
              </Typography>
              {product.change > 0 ? (
                <ArrowDropUpOutlinedIcon
                  fontSize={"large"}
                  className={classes.iconGreen}
                />
              ) : (
                <ArrowDropDownOutlinedIcon
                  fontSize={"large"}
                  className={classes.iconRed}
                />
              )}
            </Grid>
            <Grid className={classes.statsItem} item>
              <Typography
                className={product.change > 0 ? classes.green : classes.red}
                display="inline"
                variant="body1"
              >
                {formatCurrency(product.change)}
              </Typography>
              <Typography
                className={product.change > 0 ? classes.green : classes.red}
                display="inline"
                variant="body1"
              >
                ({product.changePercentage} %)
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
