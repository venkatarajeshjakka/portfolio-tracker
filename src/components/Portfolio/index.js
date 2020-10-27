import React, { useContext, useEffect, useState } from "react";
import { Container, Grid, Box, CircularProgress } from "@material-ui/core";
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
import { formattData, stockList } from "../../mappers/PositionDataFormatter";
import { getFormattStockData } from "../../mappers/WatchListDataFormatter";

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
  }
});

const Portfolio = ({ classes }) => {
  const { currentUser } = useContext(AuthContext);
  const {
    getPositionArray,
    state: { portfolioArrayService }
  } = useContext(PortfolioContext);
  useEffect(() => {
    getPositionArray(currentUser.uid);
  }, []);

  const {
    getStockInfo,
    state: { watchListStockData }
  } = useContext(StockContext);

  const [positions, setPositions] = useState(null);
  useEffect(() => {
    if (portfolioArrayService && portfolioArrayService.length > 0) {
      var formatterResponse = formattData(portfolioArrayService);

      var keys = stockList(formatterResponse);
      setPositions(keys);
      getStockInfo(keys);
    }
  }, [portfolioArrayService]);

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
        <Box mt={3}>
          <Grid container spacing={4}>
            {renderSection(watchListStockData, portfolioArrayService) ? (
              positions.map(product => {
                var stockCode = product + ".NS";
                var stockData = getFormattStockData(watchListStockData);
                var data = _.findWhere(stockData, { stockCode: stockCode });
                var portfolioStockInfo = _.where(
                  formattData(portfolioArrayService),
                  {
                    stockCode: product
                  }
                );

                const {
                  longName,
                  regularMarketChange,
                  regularMarketChangePercent,
                  regularMarketPrice
                } = data.data.price;

                var quantityArray = _.pluck(portfolioStockInfo, "quantity");
                var quantitySum = _.reduce(
                  quantityArray,
                  function(memo, num) {
                    return memo + num;
                  },
                  0
                );
                var investmentArray = portfolioStockInfo.map(item => {
                  return item.buyPrice * item.quantity;
                });

                var investment = _.reduce(
                  investmentArray,
                  function(memo, num) {
                    return memo + num;
                  },
                  0
                );

                var averagePrice = investment / quantitySum;

                var dailyGain = quantitySum * regularMarketChange;
                var currentValue = quantitySum * regularMarketPrice;
                var profitOrLoss = currentValue - investment;
                var cardResponse = {
                  quantity: quantitySum,
                  stockCode: product,
                  stockName: longName,
                  ltp: regularMarketPrice,
                  change: regularMarketChange,
                  changePercentage: (regularMarketChangePercent * 100).toFixed(
                    2
                  ),
                  avgPrice: averagePrice,
                  dailyGain: dailyGain,
                  investment: investment,
                  current: currentValue,
                  profitOrLoss
                };

                return (
                  <Grid item key={product} lg={4} md={6} xs={12}>
                    <StockCard
                      className={classes.productCard}
                      product={cardResponse}
                    />
                  </Grid>
                );
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
