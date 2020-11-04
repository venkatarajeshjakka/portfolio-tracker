import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import { Grid, Box, Paper, Tabs, Tab, Typography } from "@material-ui/core";
import PageHeader from "../shared/PageHeader";
import { AccountBalanceOutlined as AccountBalanceOutlinedIcon } from "@material-ui/icons";
import PositionList from "./PositionList";

const DisplaySection = ({ label, value }) => {
  return (
    <Grid container direction="column" justify="center">
      <Grid item>
        <Typography color="textSecondary" display="inline" variant="body2">
          {label}
        </Typography>
      </Grid>
      <Grid item>
        <Typography color="textPrimary" display="inline" variant="subtitle1">
          {value}
        </Typography>
      </Grid>
    </Grid>
  );
};
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
          <Typography>{children}</Typography>
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
                Summary
              </Typography>
            </div>

            <Box flexGrow={1}>
              <Grid container justify="space-between" spacing={3}>
                <Grid item>
                  <DisplaySection label={"Investment"} value={3000} />
                  <DisplaySection label={"Average Price"} value={3000} />
                </Grid>
                <Grid item>
                  <DisplaySection label={"Current Value"} value={3000} />
                  <DisplaySection label={"Quantity"} value={3000} />
                </Grid>
                <Grid item>
                  <DisplaySection label={"Daily Profit / Loss "} value={3000} />
                </Grid>
                <Grid item>
                  <DisplaySection label={"Returns"} value={3000} />
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
                <PositionList />
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
};

export default withRouter(withStyles(styles)(PostionDetails));
