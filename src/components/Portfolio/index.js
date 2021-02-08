import React, { useContext, useEffect } from "react";
import { Grid, Box, Paper, Typography } from "@material-ui/core";
import PageHeader from "../shared/PageHeader";
import { withStyles } from "@material-ui/core/styles";
import { Link, withRouter } from "react-router-dom";
import {
  AddOutlined as AddOutlinedIcon,
  AccountBalanceOutlined as AccountBalanceOutlinedIcon
} from "@material-ui/icons";
import { Button } from "../Controls";
import { AuthContext } from "../../context/AuthContext";
import { Context as PortfolioContext } from "../../context/PortfolioContext";
import { Context as StockContext } from "../../context/StockContext";
import { stockSummary } from "../../mappers/PositionDataFormatter";
import { Red, Green } from "../../color";
import ColoredCircularProgress from "../UtilityComponents/ColoredCircularProgress";
import {
  DisplayTopMovers,
  DisplaySummary,
  SectorComposition,
  StockCard,
  StockComposition
} from "./LandingPage";
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
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
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
                align={"left"}
                gutterBottom
                variant="h6"
              >
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
              <Typography align={"left"} gutterBottom variant="h6">
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
          <Grid container spacing={2}>
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
