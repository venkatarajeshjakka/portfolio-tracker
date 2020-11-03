import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import {
  Container,
  Grid,
  Box,
  Paper,
  Tabs,
  Tab,
  Typography
} from "@material-ui/core";
import PageHeader from "../shared/PageHeader";
import { AccountBalanceOutlined as AccountBalanceOutlinedIcon } from "@material-ui/icons";

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },

  paper: {
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3)
    }
  }
});

const PostionDetails = ({ classes }) => {
  var cardResponse = {
    quantity: 10,
    stockCode: "RELIANCE",
    stockName: "RELIANCE INDUSTRIES",
    ltp: 1987,
    change: 86.2,
    changePercentage: (0.0234 * 100).toFixed(2),
    avgPrice: 1650,
    dailyGain: 234,
    investment: 34500,
    current: 37000,
    profitOrLoss: 3000,
    profirOrLossPercentage: 32
  };

  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Container>
        <PageHeader
          title="Portfolio Details"
          subTitle="Stocks in wallet"
          icon={<AccountBalanceOutlinedIcon fontSize="large" />}
        />

        <Grid container>
          <Grid item xs={12}>
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
              <Box>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  indicatorColor="primary"
                  textColor="primary"
                  centered
                >
                  <Tab label="Item One" />
                  <Tab label="Item Two" />
                  <Tab label="Item Three" />
                </Tabs>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default withRouter(withStyles(styles)(PostionDetails));
