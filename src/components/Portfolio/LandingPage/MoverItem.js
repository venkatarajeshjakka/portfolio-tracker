import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { formatCurrency } from "../../../extensions/Formatters";

const MoverItem = ({
  stockName,
  ltp,
  dailyGain,
  changePercentage,
  redClass,
  greenClass,
  priceClass,
  headingClass
}) => {
  return (
    <Grid item>
      <Typography className={headingClass} gutterBottom variant="h6">
        {stockName}
      </Typography>
      <Typography className={priceClass} gutterBottom variant="subtitle2">
        {formatCurrency(ltp)}
      </Typography>
      <Typography
        className={dailyGain > 0 ? greenClass : redClass}
        gutterBottom
        variant="subtitle2"
      >
        {`${formatCurrency(dailyGain)}(${changePercentage}%)`}
      </Typography>
    </Grid>
  );
};

export default MoverItem;
export {MoverItem}
