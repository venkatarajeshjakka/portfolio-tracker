import React from "react";
import {
  IconButton,
  List,
  ListItem,
  makeStyles,
  Box,
  Grid,
  Typography
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { formatCurrency } from "../../extensions/Formatters";
import CircleProgresBar from "../CircularProgressBar";
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

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%"
  },
  progress: {
    paddingBottom: theme.spacing(1)
  },
  moreIcon: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
}));
const PositionList = ({ className, data, ...rest }) => {
  const classes = useStyles();
  console.log(data.history);

  return (
    <List>
      {data.history.map((product, i) => {
        const {
          stockName,
          id,
          buyPrice,
          date,
          quantity,
          stopLoss,
          targetPrice,
          trailingStopLoss
        } = product;
        return (
          <ListItem divider={i < data.history.length - 1} key={product.id}>
            <IconButton className={classes.moreIcon} edge="end" size="small">
              <MoreVertIcon />
            </IconButton>

            <Box flexGrow={1}>
              <Grid
                container
                alignItems={"center"}
                justify={"center"}
                spacing={1}
              >
                <Grid item xs={3}>
                  <DisplaySection
                    label={"Buy Price"}
                    value={formatCurrency(buyPrice)}
                  />
                  <DisplaySection label={"Investment Value"} value={3000} />
                  <DisplaySection
                    label={"Trailing Stop loss"}
                    value={formatCurrency(trailingStopLoss)}
                  />
                  <DisplaySection label={"Daily Gain / Loss"} value={3000} />
                </Grid>
                <Grid item xs={3}>
                  <DisplaySection
                    label={"Stop loss"}
                    value={formatCurrency(stopLoss)}
                  />
                  <DisplaySection label={"Current Value"} value={3000} />
                  <DisplaySection label={"Quantity"} value={quantity} />
                  <DisplaySection label={"Return"} value={3000} />
                </Grid>

                <Grid item xs={3}>
                  <div className={classes.progress}>
                    <CircleProgresBar percentage={70} />
                  </div>
                </Grid>
              </Grid>
            </Box>
          </ListItem>
        );
      })}
    </List>
  );
};

export default PositionList;
