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
  makeStyles
} from "@material-ui/core";
import {
  WorkOutlineOutlined as WorkOutlineOutlinedIcon,
  LocalOfferOutlined as LocalOfferOutlinedIcon
} from "@material-ui/icons";

import { formatCurrency } from "../../extensions/Formatters";
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column"
  },
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
    color: "#32cd32"
  }
}));

const StockCard = ({ className, product, ...rest }) => {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardContent>
        <Typography
          align="center"
          color="textPrimary"
          gutterBottom
          variant="h6"
        >
          {product.title}
        </Typography>
        <Box p={2}>
          <Grid container justify="space-between" spacing={2}>
            <Grid className={classes.statsItem} item>
              <Typography
                className={classes.green}
                display="inline"
                variant="body2"
              >
                {formatCurrency(1200)}
              </Typography>
            </Grid>
            <Grid className={classes.statsItem} item>
              <Typography
                className={classes.red}
                display="inline"
                variant="body2"
              >
                {formatCurrency(14.6)}
              </Typography>
              <Typography
                className={classes.red}
                display="inline"
                variant="body2"
              >
                (1.5 %)
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
              <Typography color="textPrimary" display="inline" variant="body2">
                {formatCurrency(34000)}
              </Typography>
            </Grid>
            <Grid className={classes.statsItem} item>
              <Typography color="textPrimary" display="inline" variant="body2">
                {formatCurrency(44000)}
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
              <Typography color="textPrimary" display="inline" variant="body2">
                {formatCurrency(34000)}
              </Typography>
            </Grid>
            <Grid className={classes.statsItem} item>
              <Typography color="textPrimary" display="inline" variant="body2">
                {formatCurrency(44000)}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
      <Box flexGrow={1} />
      <Divider />
      <Box p={2}>
        <Grid container justify="space-between" spacing={2}>
          <Grid className={classes.statsItem} item>
            <WorkOutlineOutlinedIcon
              className={classes.statsIcon}
              color="action"
            />
            <Typography color="textSecondary" display="inline" variant="body2">
              120
            </Typography>
          </Grid>
          <Grid className={classes.statsItem} item>
            <LocalOfferOutlinedIcon
              className={classes.statsIcon}
              color="action"
            />
            <Typography color="textSecondary" display="inline" variant="body2">
              {formatCurrency(product.totalDownloads)}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};

StockCard.propTypes = {
  className: PropTypes.string,
  product: PropTypes.object.isRequired
};

export default StockCard;
