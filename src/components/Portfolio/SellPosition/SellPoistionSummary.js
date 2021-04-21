import React, { useContext, useState, useEffect } from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import { Context as PortfolioContext } from "../../../context/PortfolioContext";
import { Context as StockContext } from "../../../context/StockContext";
import { Context as TransactionContext } from "../../../context/SellTransactionContext";
import _ from "underscore";
import { SellBaseForm } from "../Base";
import { AuthContext } from "../../../context/AuthContext";
import StockSummary from "./StockSummary";
import { getFormattStockData } from "../../../mappers/WatchListDataFormatter";
import { stockResponse } from "../../../mappers/PositionDataFormatter";

const styles = theme => ({
  container: {
    flexGrow: 1,
    marginTop: theme.spacing(7),
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2)
  },
  form: {
    marginRight: theme.spacing(2)
  }
});

const SellPositionSummary = props => {
  const { classes, history } = props;
  const {
    addClosedPosition,
    updatePositionQuantity,
    deletePosition,
    state: { formattedResponse }
  } = useContext(PortfolioContext);

  const {
    state: { watchListStockData }
  } = useContext(StockContext);

  const {
    addTransaction,
    state: { position }
  } = useContext(TransactionContext);

  const { currentUser } = useContext(AuthContext);
  const [values, setValues] = useState({
    sellPrice: "",
    quantity: ""
  });

  const [stockName, setStockName] = useState("");

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [positionData, setPositionData] = useState(null);
  const [stockInformation, setStockInfo] = useState(null);

  useEffect(() => {
    var response = _.findWhere(formattedResponse, { id: position });

    if (response) {
      setPositionData(response);
      setStockName(response.stockName);
      var portfolioStockInfo = _.where(formattedResponse, {
        stockCode: response.stockCode
      });
      if (watchListStockData) {
        var stockSymbol = response.stockCode + ".NS";
        var stockData = getFormattStockData(watchListStockData);
        var data = _.findWhere(stockData, { stockCode: stockSymbol });

        var cardResponse = {
          summary: stockResponse(data, portfolioStockInfo, response.stockCode)
        };
        setStockInfo(cardResponse.summary);
        setValues({
          ...values,
          quantity: response.quantity,
          sellPrice: cardResponse.summary.ltp
        });
      }
    }
  }, [position, formattedResponse, watchListStockData]);
  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleReset = () => {
    setSelectedDate(new Date());
    setValues({
      ...setValues,
      sellPrice: "",
      quantity: ""
    });
  };

  const handleSubmit = () => {
    var request = {
      stockName: positionData.stockName,
      stockCode: positionData.stockCode,
      buyPrice: positionData.buyPrice,
      sellPrice: values.sellPrice,
      sellDate: selectedDate,
      quantity: values.quantity,
      buyDate: positionData.date
    };
    addTransaction(request);
    //addClosedPosition(request, currentUser.uid);
    let difference = positionData.quantity - values.quantity;
    var parsed = parseInt(difference, 10);
    //if (parsed === 0) {
    //deletePosition(position);
    //} else {
    //updatePositionQuantity(position, parsed);
    //}

    //history.push("/portfolio");
    history.push("/sell-position-summary-final");
  };

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  if (!positionData) {
    return <CircularProgress />;
  } else {
    return (
      <main className={classes.container}>
        <Grid container justify="space-between" spacing={3}>
          <Grid item lg={6} xl={6} sm={12} xs={12}>
            <StockSummary data={stockInformation} />
          </Grid>
          <Grid item lg={6} xl={6} sm={12} xs={12}>
            <div className={classes.form}>
              <SellBaseForm
                stockName={stockName}
                handleChange={handleChange}
                values={values}
                handleDateChange={handleDateChange}
                selectedDate={selectedDate}
                handleReset={handleReset}
                handleSubmit={handleSubmit}
              />
            </div>
          </Grid>
        </Grid>
      </main>
    );
  }
};

export default withRouter(withStyles(styles)(SellPositionSummary));
