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
  CardActionArea,
  CardHeader,
  IconButton
} from "@material-ui/core";
import {
  WorkOutlineOutlined as WorkOutlineOutlinedIcon,
  LocalOfferOutlined as LocalOfferOutlinedIcon,
  MoreVert as MoreVertIcon
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
    color: "#32cd32"
  },
  actionArea: {
    borderRadius: 16,
    transition: "0.2s",
    "&:hover": {
      transform: "scale(1.1)"
    }
  }
}));

const StockCard = ({ className, product, ...rest }) => {
  const classes = useStyles();

  return (
    <CardActionArea className={classes.actionArea}>
      <Card className={clsx(classes.root, className)} {...rest}>
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={product.title}
          subheader="September 14, 2016"
        />
        <CardContent>
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
                <Typography
                  color="textPrimary"
                  display="inline"
                  variant="body2"
                >
                  {formatCurrency(34000)}
                </Typography>
              </Grid>
              <Grid className={classes.statsItem} item>
                <Typography
                  color="textPrimary"
                  display="inline"
                  variant="body2"
                >
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
                <Typography
                  color="textPrimary"
                  display="inline"
                  variant="body2"
                >
                  {formatCurrency(34000)}
                </Typography>
              </Grid>
              <Grid className={classes.statsItem} item>
                <Typography
                  color="textPrimary"
                  display="inline"
                  variant="body2"
                >
                  {formatCurrency(44000)}
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
                color="action"
              />
              <Typography
                color="textSecondary"
                display="inline"
                variant="body2"
              >
                120
              </Typography>
            </Grid>

            <Grid className={classes.statsItem} item>
              <LocalOfferOutlinedIcon
                className={classes.statsIcon}
                color="action"
              />
              <Typography
                color="textSecondary"
                display="inline"
                variant="body2"
              >
                {formatCurrency(product.totalDownloads)}
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
