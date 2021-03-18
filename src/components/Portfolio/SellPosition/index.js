import React, { useContext, useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import DisplayItemSection from "../DisplayItemSection";
import { Context as PortfolioContext } from "../../../context/PortfolioContext";
import { Context as StockContext } from "../../../context/StockContext";
import { formatCurrency } from "../../../extensions/Formatters";
import { getFormattStockData } from "../../../mappers/WatchListDataFormatter";
import { stockResponse } from "../../../mappers/PositionDataFormatter";
import _ from "underscore";
import moment from "moment";
import { Red, Green } from "../../../color";
const styles = theme => ({
  container: {
    flexGrow: 1,
    marginTop: theme.spacing(7),
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper
  },
  item: {
    width: "100%",
    marginBottom: theme.spacing(2),
    marginRight: theme.spacing(3),
    padding: theme.spacing(2),
    border: "1px solid #dde0e4",
    display: "block",
    position: "relative",
    tansition: "all 0.3s",
    borderRadius: theme.spacing(1),
    cursor: "pointer",
    "&:hover": {
      borderRadius: theme.spacing(1),
      border: "2px solid #008080"
    }
  },
  selectedItem: {
    width: "100%",
    marginBottom: theme.spacing(2),
    marginRight: theme.spacing(3),
    padding: theme.spacing(2),
    border: "2px solid #008080",
    display: "block",
    position: "relative",
    borderRadius: theme.spacing(1),
    cursor: "pointer"
  },
  red: {
    color: Red.dafault
  },
  green: {
    color: Green.default
  }
});

const SellPosition = props => {
  const { classes } = props;
  var stockCode = props.match.params.stockCode;

  const {
    state: { formattedResponse }
  } = useContext(PortfolioContext);

  var portfolioStockInfo = _.where(formattedResponse, {
    stockCode: stockCode
  });

  const {
    state: { watchListStockData }
  } = useContext(StockContext);

  var stockSymbol = stockCode + ".NS";
  var stockData = getFormattStockData(watchListStockData);
  var data = _.findWhere(stockData, { stockCode: stockSymbol });

  const [value, setValue] = useState("");
  var cardResponse = {
    summary: stockResponse(data, portfolioStockInfo, stockCode),
    history: portfolioStockInfo
  };

  const { stockName, ltp, change, changePercentage } = cardResponse.summary;
  return (
    <main className={classes.container}>
      <Grid container direction="row" justify="space-between" spacing={2}>
        <Grid item lg={6} xl={6} sm={12} xs={12}>
          <div>
            <Typography
              component="h5"
              variant="h5"
              align="left"
              color="primary"
            >
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
        </Grid>
        <Grid item lg={6} xl={6} sm={12} xs={12}>
          {portfolioStockInfo.map(item => {
            console.log(item);
            return (
              <div
                key={item.id}
                onClick={event => {
                  event.preventDefault();
                  setValue(item.id);
                }}
                className={
                  value === item.id ? classes.selectedItem : classes.item
                }
              >
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                  spacing={2}
                >
                  <Grid item lg={3} xl={3} md={3} sm={6} xs={6} >
                    <DisplayItemSection
                      label={"Buy Price"}
                      value={formatCurrency(item.buyPrice)}
                    />
                  </Grid>
                  <Grid item lg={3} xl={3} md={3} sm={6} xs={6}>
                    <DisplayItemSection
                      label={"Quantity"}
                      value={item.quantity}
                    />
                  </Grid>
                  <Grid item lg={3} xl={3} md={3} sm={6} xs={6}>
                    <DisplayItemSection
                      label={"Age"}
                      value={moment(item.date)
                        .startOf("day")
                        .fromNow()}
                    />
                  </Grid>
                  <Grid item lg={3} xl={3} md={3} sm={6} xs={6}>
                    <DisplayItemSection
                      label={"Buy Price"}
                      value={item.buyPrice}
                    />
                  </Grid>
                </Grid>
              </div>
            );
          })}
        </Grid>
      </Grid>
    </main>
  );
};

export default withRouter(withStyles(styles)(SellPosition));
