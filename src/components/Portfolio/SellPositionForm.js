import React, { useState } from "react";
import {
  Grid,
  InputAdornment,
  Container,
  Paper,
  Typography,
  Box
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Input, Button, DatePicker } from "../Controls";
import { withRouter } from "react-router";
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
  statsItem: {
    alignItems: "center",
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
    paddingTop: theme.spacing(3),
    display: "flex",
    flexDirection: "row"
  }
});

const SellPositionForm = props => {
  const { classes, history } = props;

  const [values, setValues] = useState({
    sellPrice: "",
    quantity: ""
  });

  const [stockName, setStockName] = useState("");

  const [selectedDate, setSelectedDate] = useState(new Date());

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
    setStockName("");
  };

  const handleSubmit = () => {
    history.push("/portfolio");
  };

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={9}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
              Sell Position
            </Typography>
            <form
              className={classes.form}
              noValidate
              autoComplete="off"
              onSubmit={e => e.preventDefault() && false}
            >
              <Grid container justify="center">
                <Grid item xs={6}>
                  <Input
                    name="stockName"
                    label="Stock Name"
                    value={stockName}
                    fullWidth={true}
                    id="outlined-adornment-amount"
                    margin="normal"
                  />
                </Grid>
              </Grid>
              <Grid container justify="center" spacing={3}>
                <Grid item xs={3}>
                  <Input
                    name="sellPrice"
                    label="Sell Price"
                    onChange={handleChange("targetPrice")}
                    value={values.sellPrice}
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
                </Grid>
                <Grid item xs={3}>
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

                  <div className={classes.button}>
                    <Button
                      variant="outlined"
                      color="primary"
                      size="large"
                      text={"Reset"}
                      onClick={handleReset}
                    />
                    <Button
                      text={"Save"}
                      autoFocus
                      startIcon={<SaveIcon />}
                      size="large"
                      onClick={handleSubmit}
                    />
                  </div>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <Typography
              component="h1"
              variant="h4"
              color="primary"
              align="center"
            >
              Summary
            </Typography>
            <Box flexGrow={1}>
              <Grid container justify="space-between" spacing={2}>
                <Grid className={classes.statsItem} item>
                  <Typography
                    color="textPrimary"
                    display="inline"
                    variant="subtitle1"
                  >
                    Investment :
                  </Typography>
                </Grid>
                <Grid className={classes.statsItem} item>
                  <Typography
                    color="textPrimary"
                    display="inline"
                    variant="subtitle1"
                  >
                    {30000}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container justify="space-between" spacing={2}>
                <Grid className={classes.statsItem} item>
                  <Typography
                    color="textPrimary"
                    display="inline"
                    variant="subtitle1"
                  >
                    Buy Price :
                  </Typography>
                </Grid>
                <Grid className={classes.statsItem} item>
                  <Typography
                    color="textPrimary"
                    display="inline"
                    variant="subtitle1"
                  >
                    {200}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container justify="space-between" spacing={2}>
                <Grid className={classes.statsItem} item>
                  <Typography
                    color="textPrimary"
                    display="inline"
                    variant="subtitle1"
                  >
                    Buy Quantity :
                  </Typography>
                </Grid>
                <Grid className={classes.statsItem} item>
                  <Typography
                    color="textPrimary"
                    display="inline"
                    variant="subtitle1"
                  >
                    {200}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container justify="space-between" spacing={2}>
                <Grid className={classes.statsItem} item>
                  <Typography
                    color="textPrimary"
                    display="inline"
                    variant="subtitle1"
                  >
                    Buy Date :
                  </Typography>
                </Grid>
                <Grid className={classes.statsItem} item>
                  <Typography
                    color="textPrimary"
                    display="inline"
                    variant="subtitle1"
                  >
                    {200}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container justify="space-between" spacing={2}>
                <Grid className={classes.statsItem} item>
                  <Typography
                    color="textPrimary"
                    display="inline"
                    variant="subtitle1"
                  >
                    Profit / Loss :
                  </Typography>
                </Grid>
                <Grid className={classes.statsItem} item>
                  <Typography
                    color="textPrimary"
                    display="inline"
                    variant="subtitle1"
                  >
                    {200}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default withRouter(withStyles(styles)(SellPositionForm));
