import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { Input, Button, DatePicker } from "../Controls";
import { withRouter } from "react-router";
import SaveIcon from "@material-ui/icons/Save";
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    
    alignContent: "center",
    alignItems: "center",
    margin: theme.spacing(3)
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
        <Grid item xs={6}>
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
          <Button text={"Save"} autoFocus startIcon={<SaveIcon />} size="large" />
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
