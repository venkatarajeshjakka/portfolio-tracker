import React from "react";
import MoverItem from "./MoverItem";
import { Grid, Divider } from "@material-ui/core";

const DisplayTopMovers = ({ data, greenClass, redClass }) => {
  const { topGainer, topLoser } = data.topMovers;
  if (topLoser.change < 0 && topGainer.change > 0) {
    return (
      <Grid container justify="space-between" alignItems="center" spacing={3}>
        <MoverItem
          stockName={topGainer.stockCode}
          ltp={topGainer.ltp}
          dailyGain={topGainer.change}
          changePercentage={topGainer.changePercentage}
          redClass={redClass}
          greenClass={greenClass}
        />

        <Divider orientation="vertical" flexItem variant="middle" />
        <MoverItem
          stockName={topLoser.stockCode}
          ltp={topLoser.ltp}
          dailyGain={topLoser.change}
          changePercentage={topLoser.changePercentage}
          redClass={redClass}
          greenClass={greenClass}
        />
      </Grid>
    );
  }
  if (topGainer.change > 0) {
    return (
      <Grid container alignItems="center" spacing={3}>
        <MoverItem
          stockName={topGainer.stockCode}
          ltp={topGainer.ltp}
          dailyGain={topGainer.change}
          changePercentage={topGainer.changePercentage}
          redClass={redClass}
          greenClass={greenClass}
        />
      </Grid>
    );
  }
  if (topLoser.change < 0) {
    return (
      <Grid container alignItems="center" spacing={3}>
        <MoverItem
          stockName={topLoser.stockCode}
          ltp={topLoser.ltp}
          dailyGain={topLoser.change}
          changePercentage={topLoser.changePercentage}
          redClass={redClass}
          greenClass={greenClass}
        />
      </Grid>
    );
  }
};

export default DisplayTopMovers;
export { DisplayTopMovers };
