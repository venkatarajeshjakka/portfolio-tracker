import React, { useContext, useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import DisplayItemSection from "../DisplayItemSection";
import { Context as PortfolioContext } from "../../../context/PortfolioContext";
import { Context as StockContext } from "../../../context/StockContext";
import { Context as TransactionContext } from "../../../context/SellTransactionContext";
import { formatCurrency } from "../../../extensions/Formatters";
import { getFormattStockData } from "../../../mappers/WatchListDataFormatter";
import { stockResponse } from "../../../mappers/PositionDataFormatter";
import { Button } from "../../Controls";
import _ from "underscore";
import moment from "moment";
import StockSummary from "./StockSummary";
import KeyboardBackspaceOutlinedIcon from "@material-ui/icons/KeyboardBackspaceOutlined";
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
  button: {
    marginTop: theme.spacing(3),
    display: "flex",
    justifyContent: "flex-end"
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

  const { addSellPosition } = useContext(TransactionContext);

  var stockSymbol = stockCode + ".NS";
  var stockData = getFormattStockData(watchListStockData);
  var data = _.findWhere(stockData, { stockCode: stockSymbol });

  const [value, setValue] = useState("");
  var cardResponse = {
    summary: stockResponse(data, portfolioStockInfo, stockCode)
  };

  const onClickOfNext = event => {
    addSellPosition(value);
    props.history.push("/sell-position-summary");
  };

  return (
    <main className={classes.container}>
      <Grid container direction="row" justify="space-between" spacing={2}>
        <Grid item lg={6} xl={6} sm={12} xs={12}>
          <StockSummary data={cardResponse.summary} />
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
                  <Grid item lg={3} xl={3} md={3} sm={6} xs={6}>
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
      <div className={classes.button}>
        <Button startIcon={<KeyboardBackspaceOutlinedIcon />} size="large" />
        <Button
          onClick={event => {
            onClickOfNext(event);
          }}
          text={"Next"}
          size="large"
        />
      </div>
    </main>
  );
};

export default withRouter(withStyles(styles)(SellPosition));
