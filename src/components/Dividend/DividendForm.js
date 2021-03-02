import React, { useState, useContext, useEffect } from "react";
import { InputAdornment } from "@material-ui/core";
import { Input, DatePicker } from "../Controls";
import { withRouter } from "react-router";
import { withStyles } from "@material-ui/core/styles";
import Autocomplete from "@material-ui/lab/Autocomplete";
import _ from "underscore";
import { AuthContext } from "../../context/AuthContext";
import { stockList } from "../../data/stockList";
import { Context as DividendContext } from "../../context/DividendContext";
import { BaseFormActionButtons } from "../Portfolio/Base";
const styles = theme => ({
  root: {
    alignContent: "center",
    alignItems: "center",
    margin: theme.spacing(3)
  },
  buttonPosition: {
    display: "flex",
    justifyContent: "flex-end"
  }
});
const DividendForm = props => {
  const { documentId } = props;
  const [values, setValues] = useState({
    amount: ""
  });

  const [stockName, setStockName] = useState("");

  const [selectedDate, setSelectedDate] = useState(new Date());
  useEffect(() => {
    if (documentId) {
      var response = _.findWhere(dividendArrayService, { id: documentId });
      setStockName(response.data.stockName);
      setSelectedDate(new Date(response.data.date.seconds * 1000));
      setValues({ ...values, amount: response.data.amount });
    }
  }, [documentId]);
  const { currentUser } = useContext(AuthContext);
  const {
    addDividendHistory,
    editEntry,
    state: { dividendArrayService }
  } = useContext(DividendContext);

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleReset = () => {
    setSelectedDate(new Date());
    setValues({ ...setValues, amount: "" });
    setStockName("");
  };

  const handleSubmit = () => {
    const currentUserId = currentUser.uid;

    if (documentId) {
      editEntry(documentId, stockName, values.amount, selectedDate);
    } else {
      addDividendHistory(stockName, values.amount, selectedDate, currentUserId);
    }

    onClose();
  };

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const { classes, onClose } = props;

  return (
    <form
      className={classes.root}
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
        name="amount"
        label="Amount"
        onChange={handleChange("amount")}
        value={values.amount}
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
  );
};

export default withRouter(withStyles(styles)(DividendForm));
