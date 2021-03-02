import React, { useState, useContext, useEffect } from "react";
import { InputAdornment } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Input, DatePicker } from "../Controls";
import { withRouter } from "react-router";
import { stockList } from "../../data/stockList";
import { AuthContext } from "../../context/AuthContext";
import { Context as PortfolioContext } from "../../context/PortfolioContext";
import { Context as StockContext } from "../../context/StockContext";
import _ from "underscore";
import { BaseFormActionButtons } from "./Base";

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  form: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  buttonPosition: {
    display: "flex",
    justifyContent: "flex-end"
  }
});

const AddPortfolioForm = props => {
  const { classes, stockCode, onClose } = props;
  const { currentUser } = useContext(AuthContext);
  const { addPosition } = useContext(PortfolioContext);
  const {
    getStockData,
    state: { stockData }
  } = useContext(StockContext);
  const [values, setValues] = useState({
    buyPrice: "",
    targetPrice: "",
    stopLoss: "",
    quantity: ""
  });
  const getStockCode = stockName => {
    var response = _.findWhere(stockList, { StockName: stockName });

    var stockCode = response.Symbol;

    return stockCode;
  };
  const [stockName, setStockName] = useState("");

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  useEffect(() => {
    if (stockCode) {
      var response = _.findWhere(stockList, { Symbol: stockCode });
      var stockName = response.StockName;
      setStockName(stockName);
    }
  }, [stockCode]);
  useEffect(() => {
    if (stockName) {
      var stockCode = getStockCode(stockName);
      getStockData(stockCode);
    }
  }, [stockName]);

  useEffect(() => {
    if (stockData) {
      const { regularMarketPrice } = stockData.price;

      setValues({ ...values, buyPrice: regularMarketPrice });
    }
  }, [stockData]);

  const handleReset = () => {
    setSelectedDate(new Date());
    setValues({
      ...setValues,
      buyPrice: "",
      targetPrice: "",
      stopLoss: "",
      quantity: ""
    });
    setStockName("");
  };

  const handleSubmit = () => {
    var data = {
      stockName,
      date: selectedDate,
      buyPrice: values.buyPrice,
      targetPrice: values.targetPrice,
      stopLoss: values.stopLoss,
      quantity: values.quantity,
      trailingStopLoss: values.stopLoss
    };
    addPosition(data, currentUser.uid);
    onClose();
  };

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <div className={classes.root}>
      <form
        className={classes.form}
        noValidate
        autoComplete="off"
        onSubmit={e => e.preventDefault() && false}
      >
        <Autocomplete
          id="free-solo-demo"
          freeSolo
          value={stockName}
          options={stockList.map(option => option.StockName)}
          onChange={(event, newValue) => {
            setStockName(newValue);
            if (!newValue) {
              setValues({ ...values, buyPrice: "" });
            }
          }}
          renderInput={params => (
            <Input
              {...params}
              name="stockName"
              label="Stock Name"
              fullWidth={true}
              id="outlined-full-width"
              margin="normal"
            />
          )}
        />
        <Input
          name="buyPrice"
          label="Buy Price"
          onChange={handleChange("buyPrice")}
          value={values.buyPrice}
          fullWidth={true}
          id="outlined-adornment-amount"
          margin="normal"
          type="number"
          InputProps={{
            startAdornment: <InputAdornment position="start">₹</InputAdornment>
          }}
        />
        <Input
          name="quantity"
          label="Quantity"
          onChange={handleChange("quantity")}
          value={values.quantity}
          fullWidth={true}
          id="outlined-adornment-amount"
          margin="normal"
          type="number"
        />

        <Input
          name="targetPrice"
          label="Target Price"
          onChange={handleChange("targetPrice")}
          value={values.targetPrice}
          fullWidth={true}
          id="outlined-adornment-amount"
          margin="normal"
          type="number"
          InputProps={{
            startAdornment: <InputAdornment position="start">₹</InputAdornment>
          }}
        />
        <Input
          name="stopLoss"
          label="Stop Loss"
          onChange={handleChange("stopLoss")}
          value={values.stopLoss}
          fullWidth={true}
          id="outlined-adornment-amount"
          margin="normal"
          type="number"
          InputProps={{
            startAdornment: <InputAdornment position="start">₹</InputAdornment>
          }}
        />
        <DatePicker
          label="Date"
          value={selectedDate}
          onChange={handleDateChange}
        />
        <div className={classes.buttonPosition}>
          <BaseFormActionButtons
            handleSubmit={handleSubmit}
            handleReset={handleReset}
          />
        </div>
      </form>
    </div>
  );
};

export default withRouter(withStyles(styles)(AddPortfolioForm));
