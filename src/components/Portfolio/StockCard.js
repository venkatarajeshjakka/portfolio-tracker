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
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import GetAppIcon from "@material-ui/icons/GetApp";

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
    color: "#ff0000"
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
          variant="h5"
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
                Updated 2hr ago
              </Typography>
            </Grid>
            <Grid className={classes.statsItem} item>
              <Typography
                className={classes.red}
                display="inline"
                variant="body2"
              >
                {product.totalDownloads} Downloads
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
                Investment
              </Typography>
            </Grid>
            <Grid className={classes.statsItem} item>
              <Typography color="textPrimary" display="inline" variant="body2">
                Current Value
              </Typography>
            </Grid>
            <Grid className={classes.statsItem} item>
              <Typography color="textPrimary" display="inline" variant="body2">
                Returns
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
            <AccessTimeIcon className={classes.statsIcon} color="action" />
            <Typography color="textSecondary" display="inline" variant="body2">
              Updated 2hr ago
            </Typography>
          </Grid>
          <Grid className={classes.statsItem} item>
            <GetAppIcon className={classes.statsIcon} color="action" />
            <Typography color="textSecondary" display="inline" variant="body2">
              {product.totalDownloads} Downloads
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
