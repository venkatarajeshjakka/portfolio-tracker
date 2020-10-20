import React, { useState } from "react";
import {
  Grid,
  InputAdornment,
  Container,
  Paper,
  Typography
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Input, Button, DatePicker } from "../Controls";
import { withRouter } from "react-router";
import { stockList } from "../../data/stockList";
import SaveIcon from "@material-ui/icons/Save";

const styles = theme => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  button: {
    marginTop: theme.spacing(3),
    display: "flex"
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3)
    }
  },
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
});

const AddPortfolioForm = props => {
  const { classes } = props;
  const [values, setValues] = useState({
    amount: ""
  });

  const [stockName, setStockName] = useState("");

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleReset = () => {
    setSelectedDate(new Date());
    setValues({ ...setValues, amount: "" });
    setStockName("");
  };

  const handleSubmit = () => {};

  const handleDateChange = date => {
    setSelectedDate(date);
  };
  return (
    <div className={classes.root}>
      <Container>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Add Stock
          </Typography>
          <form
            className={classes.form}
            noValidate
            autoComplete="off"
            onSubmit={e => e.preventDefault() && false}
          >
            <Grid container justify="center">
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
            </Grid>
            <Grid container justify="center" spacing={3}>
              <Grid item xs={3}>
                <Input
                  name="buyPrice"
                  label="Buy Price"
                  onChange={handleChange("amount")}
                  value={values.amount}
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
                  onChange={handleChange("amount")}
                  value={values.amount}
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
                  name="stopLoss"
                  label="StopLoss"
                  onChange={handleChange("amount")}
                  value={values.amount}
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
              <Grid item xs={3}>
                <Input
                  name="quantity"
                  label="Quantity"
                  onChange={handleChange("amount")}
                  value={values.amount}
                  fullWidth={true}
                  id="outlined-adornment-amount"
                  margin="normal"
                  type="number"
                />
                <Input
                  name="trailingStopLoss"
                  label=" Trailing Stop Loss"
                  onChange={handleChange("amount")}
                  value={values.amount}
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
                <div className={classes.button}>
                  <Button
                    text={"Save"}
                    autoFocus
                    startIcon={<SaveIcon />}
                    size="large"
                    onClick={handleSubmit}
                  />
                  <Button
                    variant="outlined"
                    color="primary"
                    size="large"
                    text={"Reset"}
                    onClick={handleReset}
                  />
                </div>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default withRouter(withStyles(styles)(AddPortfolioForm));
