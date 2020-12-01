import React from "react";
import clsx from "clsx";

import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  colors,
  makeStyles
} from "@material-ui/core";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import MoneyIcon from "@material-ui/icons/Money";
import { formatCurrency } from "../../extensions/Formatters";
const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(3)
  },
  avatar: {
    backgroundColor: colors.red[600],
    height: 56,
    width: 56
  },
  differenceIcon: {
    color: colors.red[900]
  },
  differenceValue: {
    color: colors.red[900],
    marginRight: theme.spacing(1)
  }
}));

const Budget = ({ className, amount, label, change, changeLabel, ...rest }) => {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardContent>
        <Grid container justify="space-between" spacing={3}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="h6">
              {label}
            </Typography>
            <Typography color="textPrimary" variant="h5">
              {formatCurrency(amount)}
            </Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <MoneyIcon />
            </Avatar>
          </Grid>
        </Grid>
        <Box mt={2} display="flex" alignItems="center">
          {change ? (
            <ArrowDownwardIcon className={classes.differenceIcon} />
          ) : null}
          {change ? (
            <Typography className={classes.differenceValue} variant="body2">
              {change}%
            </Typography>
          ) : null}

          <Typography color="textSecondary" variant="caption">
            {changeLabel}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Budget;
