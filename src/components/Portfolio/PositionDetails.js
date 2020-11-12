import React, { useState, useContext } from "react";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import { Grid, Box, Paper, Tabs, Tab, Typography } from "@material-ui/core";
import PageHeader from "../shared/PageHeader";
import { AccountBalanceOutlined as AccountBalanceOutlinedIcon } from "@material-ui/icons";
import PositionList from "./PositionList";
import { Context as PortfolioContext } from "../../context/PortfolioContext";
import { Context as StockContext } from "../../context/StockContext";
import { getFormattStockData } from "../../mappers/WatchListDataFormatter";
import _ from "underscore";
import { stockResponse } from "../../mappers/PositionDataFormatter";
import { formatCurrency } from "../../extensions/Formatters";
import DisplayItemSection from "./DisplayItemSection";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`
  };
}

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },

  paper: {
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginBottom: theme.spacing(2),
      padding: theme.spacing(3)
    }
  }
});

const PostionDetails = props => {
  const { classes } = props;

  var stockCode = props.match.params.stockCode;

  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const {
    state: { formattedResponse }
  } = useContext(PortfolioContext);

  const {
    state: { watchListStockData }
  } = useContext(StockContext);

  var product = stockCode;

  var portfolioStockInfo = _.where(formattedResponse, {
    stockCode: product
  });

  var stockCode = product + ".NS";
  var stockData = getFormattStockData(watchListStockData);
  var data = _.findWhere(stockData, { stockCode: stockCode });
  console.log(portfolioStockInfo);
  if (data && portfolioStockInfo) {
    var cardResponse = {
      summary: stockResponse(data, portfolioStockInfo, product),
      history: portfolioStockInfo
    };

    return (
      <div className={classes.root}>
        <PageHeader
          title="Portfolio Details"
          subTitle="Stocks in wallet"
          icon={<AccountBalanceOutlinedIcon fontSize="large" />}
        />

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <div>
                <Typography
                  component="h5"
                  variant="h5"
                  align="left"
                  color="primary"
                >
                  {cardResponse.summary.stockName}
                </Typography>
              </div>

              <Box flexGrow={1}>
                <Grid container justify="space-between" spacing={3}>
                  <Grid item>
                    <DisplayItemSection
                      label={"Investment"}
                      value={formatCurrency(cardResponse.summary.investment)}
                    />
                    <DisplayItemSection
                      label={"Average Price"}
                      value={formatCurrency(cardResponse.summary.avgPrice)}
                    />
                  </Grid>
                  <Grid item>
                    <DisplayItemSection
                      label={"Current Value"}
                      value={formatCurrency(cardResponse.summary.current)}
                    />
                    <DisplayItemSection
                      label={"Quantity"}
                      value={cardResponse.summary.quantity}
                    />
                  </Grid>
                  <Grid item>
                    <DisplayItemSection
                      label={"Daily Profit / Loss "}
                      value={formatCurrency(cardResponse.summary.dailyGain)}
                    />
                  </Grid>
                  <Grid item>
                    <DisplayItemSection
                      label={"Returns"}
                      value={formatCurrency(cardResponse.summary.profitOrLoss)}
                    />
                  </Grid>
                </Grid>
              </Box>
            </Paper>
            <Paper className={classes.paper}>
              <Box>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  indicatorColor="primary"
                  textColor="primary"
                  variant="fullWidth"
                  aria-label="full width tabs example"
                >
                  <Tab label="Open Position" {...a11yProps(0)} />
                  <Tab label="Closed Postion" {...a11yProps(1)} />
                </Tabs>
                <TabPanel value={value} index={0}>
                  <PositionList data={cardResponse} />
                </TabPanel>
                <TabPanel value={value} index={1}>
                  Item Two
                </TabPanel>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
};

export default withRouter(withStyles(styles)(PostionDetails));
