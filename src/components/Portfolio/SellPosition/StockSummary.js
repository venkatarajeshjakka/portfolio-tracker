import React from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";
import { formatCurrency } from "../../../extensions/Formatters";
import { Red, Green } from "../../../color";
const useStyles = makeStyles(theme => ({
  red: {
    color: Red.dafault
  },
  green: {
    color: Green.default
  }
}));
const StockSummary = ({ data }) => {
  const { stockName, ltp, change, changePercentage } = data;
  const classes = useStyles();
  return (
    <div>
      <Typography component="h5" variant="h5" align="left" color="primary">
        {stockName}
      </Typography>
      <Typography align={"left"} gutterBottom variant="h5">
        {formatCurrency(ltp)}
      </Typography>

      <Grid container alignItems="center" spacing={2}>
        <Grid item>
          <Typography
            className={change > 0 ? classes.green : classes.red}
            gutterBottom
            variant="h6"
          >
            {formatCurrency(change)}
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            className={change > 0 ? classes.green : classes.red}
            gutterBottom
            variant="h6"
          >
            {changePercentage} %
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default StockSummary;
