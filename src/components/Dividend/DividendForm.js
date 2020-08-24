import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { Input, Button, DatePicker } from "../Controls";
import withStyles from "@material-ui/core/styles/withStyles";
import { withRouter } from "react-router";
import SaveIcon from "@material-ui/icons/Save";

const styles = theme => ({
  root: {
    flexGrow: 1,
    alignContent: "center",
    alignItems: "center",
    margin: theme.spacing(3)
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },

  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
});
const DividendForm = props => {
  const [values, setValues] = useState({
    stockName: "",
    amount: ""
  });
  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const classes = props;

  console.log("value:", values);
  console.log("Date:", selectedDate);
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={3}
      >
        <Grid item xs={6}>
          <Input
            name="stockName"
            label="Stock Name"
            onChange={handleChange("stockName")}
            value={values.stockName}
            fullWidth={true}
            id="outlined-full-width"
            margin="normal"
          />
        </Grid>
        <Grid item xs={3}>
          <Input
            name="amount"
            label="Amount"
            onChange={handleChange("amount")}
            value={values.amount}
            fullWidth={false}
            id="outlined-full-width"
            margin="normal"
          />
        </Grid>
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={9}>
          <DatePicker
            label="Date"
            value={selectedDate}
            onChange={handleDateChange}
          />
        </Grid>
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item>
          <Button text={"Save"} startIcon={<SaveIcon />} size="large" />
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            text={"Reset"}
          />
        </Grid>
      </Grid>
    </form>
  );
};

export default withRouter(withStyles(styles)(DividendForm));
