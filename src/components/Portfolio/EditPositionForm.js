import React, { useState, useContext, useEffect } from "react";
import { Grid, InputAdornment } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Input, DatePicker } from "../Controls";
import { withRouter } from "react-router";
import { stockList } from "../../data/stockList";
import { BaseFormTemplate, BaseFormActionButtons } from "./Base";
import { Context as PortfolioContext } from "../../context/PortfolioContext";
import _ from "underscore";
const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
});

const EditPositionForm = props => {
  const { classes, history } = props;

  const {
    editPosition,
    clearPositionId,
    state: { positionId, formattedResponse }
  } = useContext(PortfolioContext);
  const [values, setValues] = useState({
    buyPrice: "",
    targetPrice: "",
    stopLoss: "",
    quantity: "",
    trailingStopLoss: ""
  });

  const [stockName, setStockName] = useState("");

  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    var response = _.findWhere(formattedResponse, { id: positionId });

    if (response) {
      setStockName(response.stockName);
      setSelectedDate(response.date);
      setValues({
        ...setValues,
        buyPrice: response.buyPrice,
        targetPrice: response.targetPrice,
        stopLoss: response.stopLoss,
        quantity: response.quantity,
        trailingStopLoss: response.trailingStopLoss
      });
    }
  }, [positionId, formattedResponse]);

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleReset = () => {
    setSelectedDate(new Date());
    setValues({
      ...setValues,
      buyPrice: "",
      targetPrice: "",
      stopLoss: "",
      quantity: "",
      trailingStopLoss: ""
    });
    setStockName("");
  };

  const handleSubmit = () => {
    var data = {
      date: selectedDate,
      buyPrice: values.buyPrice,
      targetPrice: values.targetPrice,
      stopLoss: values.stopLoss,
      quantity: values.quantity,
      trailingStopLoss: values.trailingStopLoss
    };
    editPosition(positionId, data);
    clearPositionId();
    history.push("/portfolio");
  };

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <div className={classes.root}>
      <BaseFormTemplate title={"Edit Position"}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={9} md={6} lg={6} xl={6}>
            <Autocomplete
              id="free-solo-demo"
              freeSolo
              value={stockName}
              options={stockList.map(option => option.StockName)}
              onChange={(event, newValue) => {
                setStockName(newValue);
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
          </Grid>
        </Grid>
        <Grid container justify="space-between" spacing={3}>
          <Grid item xs={12} sm={9} md={6} lg={6} xl={6}>
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
              name="buyPrice"
              label="Buy Price"
              onChange={handleChange("buyPrice")}
              value={values.buyPrice}
              fullWidth={true}
              id="outlined-adornment-amount"
              margin="normal"
              type="number"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">₹</InputAdornment>
                )
              }}
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
                startAdornment: (
                  <InputAdornment position="start">₹</InputAdornment>
                )
              }}
            />
          </Grid>
          <Grid item xs={12} sm={9} md={6} lg={6} xl={6}>
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
                startAdornment: (
                  <InputAdornment position="start">₹</InputAdornment>
                )
              }}
            />
            <Input
              name="trailingStopLoss"
              label=" Trailing Stop Loss"
              onChange={handleChange("trailingStopLoss")}
              value={values.trailingStopLoss}
              fullWidth={true}
              id="outlined-adornment-amount"
              margin="normal"
              type="number"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">₹</InputAdornment>
                )
              }}
            />
            <DatePicker
              label="Date"
              value={selectedDate}
              onChange={handleDateChange}
            />
            <BaseFormActionButtons
              handleSubmit={handleSubmit}
              handleReset={handleReset}
            />
          </Grid>
        </Grid>
      </BaseFormTemplate>
    </div>
  );
};

export default withRouter(withStyles(styles)(EditPositionForm));
