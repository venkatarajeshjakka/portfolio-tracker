import React, { useContext, useEffect } from "react";
import { Grid, Box, Paper, Typography, Divider } from "@material-ui/core";
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
import { stockSummary } from "../../mappers/PositionDataFormatter";
import DisplayItemSection from "./DisplayItemSection";
import { formatCurrency } from "../../extensions/Formatters";
import { Red, Green } from "../../color";
import SectorComposition from "./SectorComposition";
import StockComposition from "./StockComposition";
import ColoredCircularProgress from "../UtilityComponents/ColoredCircularProgress";
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
  paperHeading: {
    paddingLeft: theme.spacing(2)
  },
  paper: {
    minHeight: "80%",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
    boxShadow: "0 8px 24px 0 rgba(0,0,0,0.12)",
    borderRadius: "1.5rem",
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

const MoverItem = ({
  stockName,
  ltp,
  dailyGain,
  changePercentage,
  redClass,
  greenClass,
  priceClass,
  headingClass
}) => {
  return (
    <Grid item>
      <Typography
        className={headingClass}
        gutterBottom
        variant="h6"
      >
        {stockName}
      </Typography>
      <Typography
        className={priceClass}
        gutterBottom
        variant="subtitle2"
      >
        {formatCurrency(ltp)}
      </Typography>
      <Typography
        className={dailyGain > 0 ? greenClass : redClass}
        gutterBottom
        variant="subtitle2"
      >
        {`${formatCurrency(dailyGain)}(${changePercentage}%)`}
      </Typography>
    </Grid>
  );
};
const DisplayTopMovers = ({ data, greenClass, redClass }) => {
  const { topGainer, topLoser } = data.topMovers;
  return (
    <Grid container justify="space-between" alignItems="center" spacing={3}>
      <MoverItem
        stockName={topGainer.stockCode}
        ltp={topGainer.ltp}
        dailyGain={topGainer.change}
        changePercentage={topGainer.changePercentage}
        redClass={redClass}
        greenClass={greenClass}
      />
      <Divider orientation="vertical" flexItem variant="middle" />
      <MoverItem
        stockName={topLoser.stockCode}
        ltp={topLoser.ltp}
        dailyGain={topLoser.change}
        changePercentage={topLoser.changePercentage}
        redClass={redClass}
        greenClass={greenClass}
      />
    </Grid>
  );
};
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
    <Grid container justify="space-evenly" alignItems="center" spacing={3}>
      <Grid item>
        <DisplayItemSection
          variant={"h5"}
          label={"Investment"}
          alignItems={"center"}
          value={formatCurrency(investment)}
        />
      </Grid>
      <Grid item>
        <DisplayItemSection
          variant={"h5"}
          label={"Current"}
          alignItems={"center"}
          value={formatCurrency(currentValue)}
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
  }, [currentUser.uid, portfolioArray]);

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
    return <ColoredCircularProgress />;
  }

  var stockSummaryResponse = stockSummary(
    positionsKeys,
    watchListStockData,
    formattedResponse
  );

  if (stockSummaryResponse) {
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
        <Grid container justify="space-between" spacing={3}>
          <Grid item sm={12} md={9} lg={9} xl={9}>
            <Paper className={classes.paper}>
              <Typography 
              className={classes.paperHeading}
              align={"left"} gutterBottom variant="h6">
                Investment overview
              </Typography>
              <DisplaySummary
                data={stockSummaryResponse}
                redClass={classes.red}
                greenClass={classes.green}
              />
            </Paper>
          </Grid>
          <Grid item sm={12} md={3} lg={3} xl={3} xs={12}>
            <Paper className={classes.paper}>
            <Typography
              align={"left"} gutterBottom variant="h6">
                Top movers
              </Typography>
              <DisplayTopMovers
                data={stockSummaryResponse}
                redClass={classes.red}
                greenClass={classes.green}
              />
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item sm={12} md={9} lg={6} xl={6}>
            <SectorComposition data={stockSummaryResponse.sectorResponse} />
          </Grid>
          <Grid item sm={12} md={9} lg={6} xl={6}>
            <StockComposition data={stockSummaryResponse.stockClassification} />
          </Grid>
        </Grid>

        <Box mt={3}>
          <Grid container spacing={4}>
            {stockSummaryResponse.stockSummary.map(item => {
              return (
                <Grid
                  item
                  key={item.stockCode}
                  lg={3}
                  md={3}
                  xl={3}
                  sm={6}
                  xs={12}
                >
                  <StockCard className={classes.productCard} product={item} />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </div>
    );
  }
};

export default withRouter(withStyles(styles)(Portfolio));
