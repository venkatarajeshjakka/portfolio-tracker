import React, { useState, useContext } from "react";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import { Grid, Box, Paper, Tabs, Tab, Typography } from "@material-ui/core";
import PositionList from "./PositionList";
import { Context as PortfolioContext } from "../../context/PortfolioContext";
import { Context as StockContext } from "../../context/StockContext";
import { getFormattStockData } from "../../mappers/WatchListDataFormatter";
import _ from "underscore";
import { stockResponse } from "../../mappers/PositionDataFormatter";
import { formatCurrency } from "../../extensions/Formatters";
import DisplayItemSection from "./DisplayItemSection";
import { Red, Green } from "../../color";
import StockSentiment from "./StockSentiment";
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
        <Box>
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
    minHeight: "90%",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
    boxShadow: "0 8px 24px 0 rgba(0,0,0,0.12)",
    borderRadius: "1.5rem",
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      padding: theme.spacing(3)
    }
  },
  paper1: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
    boxShadow: "0 8px 24px 0 rgba(0,0,0,0.12)",
    borderRadius: "1.5rem",
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      padding: theme.spacing(3)
    }
  },
  header: {
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(2)
  },
  red: {
    color: Red.dafault
  },
  green: {
    color: Green.default
  }
});

const RenderPaper = ({ style, children }) => {
  return (
    <Paper className={style}>
      <Grid container justify="space-between" spacing={3}>
        {children}
      </Grid>
    </Paper>
  );
};
const TopSection = ({
  headerClass,
  stockName,
  priceClass,
  ltp,
  change,
  changePercentage,
  greenClass,
  redClass,
  fiftyMA,
  twoHundredMA
}) => {
  return (
    <div className={headerClass}>
      <Typography component="h5" variant="h5" align="left" color="primary">
        {stockName}
      </Typography>
      <Typography
        className={priceClass}
        align={"left"}
        gutterBottom
        variant="h5"
      >
        {formatCurrency(ltp)}
      </Typography>

      <Grid container alignItems="center" spacing={2}>
        <Grid item>
          <Typography
            className={change > 0 ? greenClass : redClass}
            gutterBottom
            variant="h6"
          >
            {formatCurrency(change)}
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            className={change > 0 ? greenClass : redClass}
            gutterBottom
            variant="h6"
          >
            {changePercentage} %
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item>
          <StockSentiment
            ltp={ltp}
            fiftyMA={fiftyMA}
            twoHundredMA={twoHundredMA}
          />
        </Grid>
      </Grid>
    </div>
  );
};
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

  var stockSymbol = product + ".NS";
  var stockData = getFormattStockData(watchListStockData);
  var data = _.findWhere(stockData, { stockCode: stockSymbol });

  if (data && portfolioStockInfo) {
    var cardResponse = {
      summary: stockResponse(data, portfolioStockInfo, product),
      history: portfolioStockInfo
    };

    return (
      <div className={classes.root}>
        <TopSection
          headerClass={classes.header}
          stockName={cardResponse.summary.stockName}
          priceClass={classes.price}
          ltp={cardResponse.summary.ltp}
          change={cardResponse.summary.change}
          changePercentage={cardResponse.summary.changePercentage}
          greenClass={classes.green}
          redClass={classes.red}
          fiftyMA={cardResponse.summary.fiftyDayAverage}
          twoHundredMA={cardResponse.summary.twoHundredDayAverage}
        />

        <Grid container justify="space-between" spacing={3}>
          <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
            <RenderPaper style={classes.paper}>
              <Grid item>
                <DisplayItemSection
                  label={"52 Week High"}
                  value={formatCurrency(cardResponse.summary.fiftyTwoWeekHigh)}
                />
                <DisplayItemSection
                  label={"200 Day MA"}
                  value={formatCurrency(
                    cardResponse.summary.twoHundredDayAverage
                  )}
                />
                <DisplayItemSection
                  label={"Beta"}
                  value={
                    cardResponse.summary.beta ? cardResponse.summary.beta : "-"
                  }
                />
              </Grid>
              <Grid item>
                <DisplayItemSection
                  label={"52 Week Low"}
                  value={formatCurrency(cardResponse.summary.fiftyTwoWeekLow)}
                />
                <DisplayItemSection
                  label={"50 Day MA"}
                  value={formatCurrency(cardResponse.summary.fiftyDayAverage)}
                />
                <DisplayItemSection
                  label={"Sector"}
                  value={cardResponse.summary.sector}
                />
              </Grid>
              <Grid item>
                <DisplayItemSection
                  label={"Day High"}
                  value={formatCurrency(cardResponse.summary.dayHigh)}
                />
                <DisplayItemSection
                  label={"Dividend Yied"}
                  value={
                    cardResponse.summary.dividendYield
                      ? (cardResponse.summary.dividendYield * 100).toFixed(2)
                      : "-"
                  }
                />
              </Grid>
              <Grid item>
                <DisplayItemSection
                  label={"Day Low"}
                  value={formatCurrency(cardResponse.summary.dayLow)}
                />
                <DisplayItemSection
                  label={"Avg 5year Div.Yield"}
                  value={
                    cardResponse.summary.fiveYearAvgDividendYield
                      ? cardResponse.summary.fiveYearAvgDividendYield
                      : "-"
                  }
                />
              </Grid>
            </RenderPaper>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
            <RenderPaper style={classes.paper1}>
              <Grid item>
                <DisplayItemSection
                  label={"Investment"}
                  value={formatCurrency(cardResponse.summary.investment)}
                />
                <DisplayItemSection
                  label={"Daily Profit / Loss "}
                  value={formatCurrency(cardResponse.summary.dailyGain)}
                />
              </Grid>
              <Grid item>
                <DisplayItemSection
                  label={"Current Value"}
                  value={formatCurrency(cardResponse.summary.current)}
                />
                <DisplayItemSection
                  label={"Returns"}
                  value={formatCurrency(cardResponse.summary.profitOrLoss)}
                />
              </Grid>
            </RenderPaper>
            <RenderPaper style={classes.paper1}>
              <Grid item>
                <DisplayItemSection
                  label={"Quantity"}
                  value={cardResponse.summary.quantity}
                />
              </Grid>
              <Grid item>
                <DisplayItemSection
                  label={"Average Price"}
                  value={formatCurrency(cardResponse.summary.avgPrice)}
                />
              </Grid>
            </RenderPaper>
          </Grid>
        </Grid>
        <Paper className={classes.paper}>
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
        </Paper>
      </div>
    );
  }
};

export default withRouter(withStyles(styles)(PostionDetails));
