import React, { useState, useContext } from "react";
import { Grid, InputAdornment } from "@material-ui/core";
import { Input, Button, DatePicker } from "../Controls";
import { withRouter } from "react-router";
import SaveIcon from "@material-ui/icons/Save";
import { withStyles } from "@material-ui/core/styles";
import Autocomplete from "@material-ui/lab/Autocomplete";
import app from "../../config/firebase";
import { AuthContext } from "../../context/AuthContext";
import { stockList } from "../../data/stockList";
const styles = theme => ({
  root: {
    alignContent: "center",
    alignItems: "center",
    margin: theme.spacing(3)
  }
});
const DividendForm = props => {
  const { onClose } = props;
  const [values, setValues] = useState({
    amount: ""
  });

  const { currentUser } = useContext(AuthContext);

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleReset = () => {
    setSelectedDate(new Date());
    setValues({ ...setValues, amount: "" });
    setStockName("");
  };

  const handleSubmit = async () => {
    const db = app.firestore();
    const currentUserId = currentUser.uid;

    await db.collection("dividends").add({
      stockName,
      date: selectedDate,
      amount: values.amount,
      authorId: currentUserId
    });

    onClose();
  };
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const [stockName, setStockName] = useState("");
  const classes = props;

  console.log("value:", values);
  console.log("Date:", selectedDate);
  console.log("stockName:", stockName);
  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={e => e.preventDefault() && false}
    >
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={3}
      >
        <Grid item xs={6}>
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
        <Grid item xs={6}>
          <Input
            name="amount"
            label="Amount"
            onChange={handleChange("amount")}
            value={values.amount}
            fullWidth={false}
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
      </Grid>
      <Grid container direction="row">
        <Grid item xs={9}>
          <DatePicker
            label="Date"
            value={selectedDate}
            onChange={handleDateChange}
          />
        </Grid>
      </Grid>
      <Grid container direction="row" justify="center" alignItems="flex-start">
        <Grid item>
          <Button
            text={"Save"}
            autoFocus
            startIcon={<SaveIcon />}
            size="large"
            onClick={handleSubmit}
          />
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            text={"Reset"}
            onClick={handleReset}
          />
        </Grid>
      </Grid>
    </form>
  );
};

export default withRouter(withStyles(styles)(DividendForm));
