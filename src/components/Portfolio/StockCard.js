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
  ArrowUpwardOutlined as ArrowUpwardOutlinedIcon,
  ArrowDownwardOutlined as ArrowDownwardOutlinedIcon
} from "@material-ui/icons";

import { formatCurrency } from "../../extensions/Formatters";

const useStyles = makeStyles(theme => ({
  root: ({ color }) => ({
    display: "flex",
    flexDirection: "column",
    borderRadius: 16,
    boxShadow: "none",
    "&:hover": {
      boxShadow: `0 6px 12px 0 ${Color(color)
        .rotate(-8)
        .darken(0.2)
        .fade(0.5)}`
    }
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
  actionArea: {
    borderRadius: 16,
    transition: "0.2s",
    "&:hover": {
      transform: "scale(1.1)"
    }
  }
}));

const StockCard = props => {
  const { className, staticContext, product, ...rest } = props;

  const classes = useStyles();
  return (
    <CardActionArea className={classes.actionArea}>
      <Card className={clsx(classes.root, className)} {...rest}>
        <CardContent>
          <Typography
            align="center"
            color="textPrimary"
            gutterBottom
            variant="h5"
          >
            {product.stockName}
          </Typography>
          <Box p={2}>
            <Grid container justify="space-between" spacing={2}>
              <Grid className={classes.statsItem} item>
                <Typography
                  className={product.change > 0 ? classes.green : classes.red}
                  display="inline"
                  variant="body1"
                >
                  {formatCurrency(product.ltp)}
                </Typography>
              </Grid>
              <Grid className={classes.statsItem} item>
                {product.change > 0 ? (
                  <ArrowUpwardOutlinedIcon className={classes.green} />
                ) : (
                  <ArrowDownwardOutlinedIcon className={classes.red} />
                )}

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
          </Box>
          <Box flexGrow={1}>
            <Grid container justify="space-between" spacing={2}>
              <Grid className={classes.statsItem} item>
                <Typography
                  color="textSecondary"
                  display="inline"
                  variant="body2"
                >
                  Investment
                </Typography>
              </Grid>
              <Grid className={classes.statsItem} item>
                <Typography
                  color="textSecondary"
                  display="inline"
                  variant="body2"
                >
                  Current Value
                </Typography>
              </Grid>
            </Grid>
            <Grid container justify="space-between" spacing={2}>
              <Grid className={classes.statsItem} item>
                <Typography
                  color="textPrimary"
                  display="inline"
                  variant="body2"
                >
                  {formatCurrency(product.investment)}
                </Typography>
              </Grid>
              <Grid className={classes.statsItem} item>
                <Typography
                  color="textPrimary"
                  display="inline"
                  variant="body2"
                >
                  {formatCurrency(product.current)}
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Box flexGrow={1}>
            <Grid container justify="space-between" spacing={2}>
              <Grid className={classes.statsItem} item>
                <Typography
                  color="textSecondary"
                  display="inline"
                  variant="body2"
                >
                  Daily Gain
                </Typography>
              </Grid>
              <Grid className={classes.statsItem} item>
                <Typography
                  color="textSecondary"
                  display="inline"
                  variant="body2"
                >
                  Returns
                </Typography>
              </Grid>
            </Grid>
            <Grid container justify="space-between" spacing={2}>
              <Grid className={classes.statsItem} item>
                <Typography
                  color="textPrimary"
                  display="inline"
                  variant="body2"
                >
                  {formatCurrency(product.dailyGain)}
                </Typography>
              </Grid>
              <Grid className={classes.statsItem} item>
                <Typography
                  color="textPrimary"
                  display="inline"
                  variant="body2"
                >
                  {formatCurrency(product.profitOrLoss)}
                </Typography>
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
                {formatCurrency(product.avgPrice)}
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
