import React, { useContext, useEffect } from "react";
import {
  Container,
  Grid,
  Box,
  CircularProgress,
  Paper
} from "@material-ui/core";
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
import _ from "underscore";
import {
  stockResponse,
  stockSummary
} from "../../mappers/PositionDataFormatter";
import { getFormattStockData } from "../../mappers/WatchListDataFormatter";
import DisplayItemSection from "./DisplayItemSection";
import { formatCurrency } from "../../extensions/Formatters";

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
  }
});
const DisplaySummary = ({ keys, stockData, positionData }) => {
  var stockSummaryResponse = stockSummary(keys, stockData, positionData);
  return (
    <Grid container justify="space-between" alignItems="center" spacing={3}>
      <Grid item>
        <DisplayItemSection
          variant={"h5"}
          label={"Total Investment"}
          value={formatCurrency(stockSummaryResponse.investment)}
        />
      </Grid>
      <Grid item>
        <DisplayItemSection
          variant={"h5"}
          label={"Current Value"}
          value={formatCurrency(stockSummaryResponse.currentValue)}
        />
      </Grid>
      <Grid item>
        <DisplayItemSection
          variant={"h5"}
          label={"Daily P&L"}
          value={`${formatCurrency(stockSummaryResponse.dailyGain)}(${
            stockSummaryResponse.dailyProfitOrLossPercentage
          }%)`}
        />
      </Grid>
      <Grid item>
        <DisplayItemSection
          variant={"h5"}
          label={"P&L"}
          value={`${formatCurrency(stockSummaryResponse.profitLoss)}(${
            stockSummaryResponse.profitOrLossPercentage
          }%)`}
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
  }, [portfolioArray]);

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
  return (
    <div className={classes.root}>
      <Container>
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
          {renderSection(watchListStockData, portfolioArrayService) ? (
            <DisplaySummary
              keys={positionsKeys}
              stockData={watchListStockData}
              positionData={formattedResponse}
            />
          ) : (
            <CircularProgress />
          )}
        </Paper>

        <Box mt={3}>
          <Grid container spacing={4}>
            {renderSection(watchListStockData, portfolioArrayService) ? (
              positionsKeys.map(product => {
                var stockCode = product + ".NS";
                var stockData = getFormattStockData(watchListStockData);
                var data = _.findWhere(stockData, { stockCode: stockCode });
                var portfolioStockInfo = _.where(formattedResponse, {
                  stockCode: product
                });
                if (data) {
                  var cardResponse = stockResponse(
                    data,
                    portfolioStockInfo,
                    product
                  );
                  return (
                    <Grid item key={product} lg={4} md={6} xs={12}>
                      <StockCard
                        className={classes.productCard}
                        product={cardResponse}
                      />
                    </Grid>
                  );
                }
              })
            ) : (
              <CircularProgress />
            )}
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default withRouter(withStyles(styles)(Portfolio));
