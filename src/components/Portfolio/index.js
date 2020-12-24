import React, { useContext, useEffect } from "react";
import { Grid, Box, CircularProgress, Paper } from "@material-ui/core";
import PageHeader from "../shared/PageHeader";
import { withStyles } from "@material-ui/core/styles";
import { Link, withRouter } from "react-router-dom";
import {
  AddOutlined as AddOutlinedIcon,
  AccountBalanceOutlined as AccountBalanceOutlinedIcon
} from "@material-ui/icons";
import { Button } from "../Controls";
import StockCard from "./StockCard";
import { AuthContext } from "../../context/AuthContext";
import { Context as PortfolioContext } from "../../context/PortfolioContext";
import { Context as StockContext } from "../../context/StockContext";
import {
  stockSummary
} from "../../mappers/PositionDataFormatter";
import DisplayItemSection from "./DisplayItemSection";
import { formatCurrency } from "../../extensions/Formatters";
import { Red, Green } from "../../color";
import SectorComposition from "./SectorComposition";

const styles = theme => ({
  button: {
    margin: theme.spacing(5),
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  productCard: {
    height: "100%"
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(3)
    }
  },
  red: {
    color: Red.dafault,
    paddingRight: theme.spacing(1)
  },
  green: {
    color: Green.default,
    paddingRight: theme.spacing(1)
  }
});
const DisplaySummary = ({ data, greenClass, redClass }) => {
  const {
    investment,
    currentValue,
    dailyGain,
    dailyProfitOrLossPercentage,
    profitLoss,
    profitOrLossPercentage
  } = data;
  return (
    <Grid container justify="space-between" alignItems="center" spacing={3}>
      <Grid item>
        <DisplayItemSection
          variant={"h5"}
          label={"Investment"}
          value={formatCurrency(investment)}
          alignItems={"center"}
        />
      </Grid>
      <Grid item>
        <DisplayItemSection
          variant={"h5"}
          label={"Current"}
          value={formatCurrency(currentValue)}
          alignItems={"center"}
        />
      </Grid>
      <Grid item>
        <DisplayItemSection
          variant={"h5"}
          label={"Daily P&L"}
          value={`${formatCurrency(
            dailyGain
          )}(${dailyProfitOrLossPercentage}%)`}
          alignItems={"center"}
          textStyle={dailyGain > 0 ? greenClass : redClass}
        />
      </Grid>
      <Grid item>
        <DisplayItemSection
          variant={"h5"}
          label={"P&L"}
          value={`${formatCurrency(profitLoss)}(${profitOrLossPercentage}%)`}
          alignItems={"center"}
          textStyle={profitLoss > 0 ? greenClass : redClass}
        />
      </Grid>
    </Grid>
  );
};
const Portfolio = ({ classes }) => {
  const { currentUser } = useContext(AuthContext);
  const {
    getPositionArray,
    state: {
      portfolioArrayService,
      portfolioArray,
      formattedResponse,
      positionsKeys
    }
  } = useContext(PortfolioContext);
  useEffect(() => {
    getPositionArray(currentUser.uid);
  }, [portfolioArray, currentUser.uid, portfolioArrayService]);

  const {
    getStockInfo,
    state: { watchListStockData }
  } = useContext(StockContext);

  useEffect(() => {
    if (positionsKeys) {
      getStockInfo(positionsKeys);
    }
  }, [positionsKeys]);

  const renderSection = (positionData, stockData) => {
    return (
      positionData &&
      positionData.length > 0 &&
      stockData &&
      stockData.length > 0
    );
  };

  if (!renderSection(watchListStockData, portfolioArrayService)) {
    return <CircularProgress />;
  }

  var stockSummaryResponse = stockSummary(
    positionsKeys,
    watchListStockData,
    formattedResponse
  );

  return (
    <div className={classes.root}>
      <PageHeader
        title="Portfolio"
        subTitle="Add Stocks to wallet"
        icon={<AccountBalanceOutlinedIcon fontSize="large" />}
      />
      <Grid
        container
        spacing={3}
        direction="row"
        justify="flex-end"
        alignItems="center"
        className={classes.Button}
      >
        <Button
          variant="outlined"
          color="primary"
          component={Link}
          to="/add-position"
          text={"Add"}
          startIcon={<AddOutlinedIcon />}
        />
      </Grid>

      <Paper className={classes.paper}>
        <DisplaySummary
          data={stockSummaryResponse}
          redClass={classes.red}
          greenClass={classes.green}
        />
      </Paper>
      <SectorComposition />
      <Box mt={3}>
        <Grid container spacing={4}>
          {stockSummaryResponse.stockSummary.map(item => {
            return (
              <Grid item key={item.stockCode} lg={4} md={6} xs={12}>
                <StockCard className={classes.productCard} product={item} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
};

export default withRouter(withStyles(styles)(Portfolio));
