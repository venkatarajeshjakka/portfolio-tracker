import React, { useState, useContext, useEffect } from "react";
import {
  Grid,
  InputAdornment,
  Paper,
  Typography,
  Box,
  CircularProgress
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Input, Button, DatePicker } from "../Controls";
import { withRouter } from "react-router";
import SaveIcon from "@material-ui/icons/Save";
import { Context as PortfolioContext } from "../../context/PortfolioContext";
import _ from "underscore";
import moment from "moment";
import { formatCurrency } from "../../extensions/Formatters";
import { AuthContext } from "../../context/AuthContext";
import { Context as StockContext } from "../../context/StockContext";
import { getStockDetails } from "../../mappers/PositionDataFormatter";
import BaseFormTemplate from "./BaseFormTemplate";
import BaseFormActionButtons from "./BaseFormActionButtons";
const DisplaySection = ({ label, value, className }) => {
  return (
    <Grid container justify="space-between" spacing={2}>
      <Grid className={className} item>
        <Typography color="textPrimary" display="inline" variant="subtitle1">
          {label}
        </Typography>
      </Grid>
      <Grid className={className} item>
        <Typography color="textPrimary" display="inline" variant="subtitle1">
          {value}
        </Typography>
      </Grid>
    </Grid>
  );
};
const styles = theme => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  button: {
    marginTop: theme.spacing(3),
    display: "flex",
    alignItems: "center"
  },
  statsItem: {
    alignItems: "center",
    display: "flex"
  },
  paper: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(3),
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

  const {
    addClosedPosition,
    updatePositionQuantity,
    deletePosition,
    clearPositionId,
    state: { positionId, formattedResponse }
  } = useContext(PortfolioContext);

  const {
    state: { watchListStockData }
  } = useContext(StockContext);

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
    var response = _.findWhere(formattedResponse, { id: positionId });

    if (response) {
      setPositionData(response);
      setStockName(response.stockName);
      if (watchListStockData) {
        var stockInfo = getStockDetails(response.stockCode, watchListStockData);
        setStockInfo(stockInfo);
      }
    }
  }, [positionId, formattedResponse, watchListStockData]);
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
    addClosedPosition(request, currentUser.uid);
    let difference = positionData.quantity - values.quantity;
    var parsed = parseInt(difference, 10);
    if (parsed === 0) {
      deletePosition(positionId);
    } else {
      updatePositionQuantity(positionId, parsed);
    }
    clearPositionId();
    history.push("/portfolio");
  };

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const calculateProfit = () => {
    if (values.sellPrice && values.quantity) {
      var investment = positionData.buyPrice * values.quantity;
      var current = values.sellPrice * values.quantity;
      return formatCurrency(current - investment);
    } else {
      return "N/A";
    }
  };
  if (!positionData) {
    return <CircularProgress />;
  } else {
    return (
      <div className={classes.root}>
        <Grid container justify={"space-between"} spacing={3}>
          <Grid item xs={12} sm={9} md={9} xl={9} lg={9}>
            <BaseFormTemplate title={"Sell Position"}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={9} md={6} lg={6} xl={6}>
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
              <Grid container justify="space-between" spacing={3}>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                  <Input
                    name="sellPrice"
                    label="Sell Price"
                    onChange={handleChange("sellPrice")}
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
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
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
          </Grid>
          <Grid item xs={12} sm={3} lg={3} md={3} xl={3}>
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
                <DisplaySection
                  className={classes.statsItem}
                  label={"Investment :"}
                  value={formatCurrency(
                    positionData.buyPrice * positionData.quantity
                  )}
                />
                <DisplaySection
                  className={classes.statsItem}
                  label={"Buy Price :"}
                  value={formatCurrency(positionData.buyPrice)}
                />
                <DisplaySection
                  className={classes.statsItem}
                  label={"Buy Quantity :"}
                  value={positionData.quantity}
                />
                <DisplaySection
                  className={classes.statsItem}
                  label={"Buy Date :"}
                  value={moment(positionData.date).format("MMMM Do YYYY")}
                />
                <DisplaySection
                  className={classes.statsItem}
                  label={"Profit / Loss :"}
                  value={calculateProfit()}
                />
              </Box>
            </Paper>

            <Paper className={classes.paper}>
              <Box flexGrow={1}>
                <DisplaySection
                  className={classes.statsItem}
                  label={"ltp :"}
                  value={formatCurrency(stockInformation.ltp)}
                />
                <DisplaySection
                  className={classes.statsItem}
                  label={"Change"}
                  value={`${formatCurrency(stockInformation.change)}(${
                    stockInformation.changePercentage
                  }%)`}
                />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
};

export default withRouter(withStyles(styles)(SellPositionForm));
