import React from "react";
import DisplayItemSection from "../DisplayItemSection";
import { Grid } from "@material-ui/core";
import { formatCurrency } from "../../../extensions/Formatters";

const DisplaySummary = ({ data, greenClass, redClass }) => {
  const {
    investment,
    currentValue,
    dailyGain,
    dailyProfitOrLossPercentage,
    profitLoss,
    profitOrLossPercentage
  } = data;
  return (
    <Grid container justify="space-evenly" alignItems="center" spacing={3}>
      <Grid item>
        <DisplayItemSection
          variant={"h5"}
          label={"Investment"}
          alignItems={"center"}
          value={formatCurrency(investment)}
        />
      </Grid>
      <Grid item>
        <DisplayItemSection
          variant={"h5"}
          label={"Current"}
          alignItems={"center"}
          value={formatCurrency(currentValue)}
        />
      </Grid>
      <Grid item>
        <DisplayItemSection
          variant={"h5"}
          label={"Daily P&L"}
          value={`${formatCurrency(
            dailyGain
          )}(${dailyProfitOrLossPercentage}%)`}
          alignItems={"center"}
          textStyle={dailyGain > 0 ? greenClass : redClass}
        />
      </Grid>
      <Grid item>
        <DisplayItemSection
          variant={"h5"}
          label={"P&L"}
          value={`${formatCurrency(profitLoss)}(${profitOrLossPercentage}%)`}
          alignItems={"center"}
          textStyle={profitLoss > 0 ? greenClass : redClass}
        />
      </Grid>
    </Grid>
  );
};

export default DisplaySummary;
export { DisplaySummary };
