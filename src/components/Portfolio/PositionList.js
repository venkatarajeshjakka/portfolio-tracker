import React, { useState } from "react";

import { v4 as uuid } from "uuid";
import moment from "moment";
import {
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Box,
  Grid,
  Typography
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";

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

const useStyles = makeStyles({
  root: {
    height: "100%"
  }
});
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
            <Grid container direction="column">
              <Grid item>
                <Grid container direction="row" justify="space-between">
                  <Grid item>
                    <ListItemText
                      primary={stockName}
                      secondary={"data ll come"}
                    />
                  </Grid>
                  <Grid item>
                    <IconButton edge="end" size="small">
                      <MoreVertIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Box flexGrow={1}>
                  <Grid container justify="space-between" spacing={3}>
                    <Grid item>
                      <DisplaySection label={"Buy Price"} value={buyPrice} />
                      <DisplaySection label={"Investment Value"} value={3000} />
                    </Grid>
                    <Grid item>
                      <DisplaySection label={"Stop loss"} value={stopLoss} />
                      <DisplaySection label={"Current Value"} value={3000} />
                    </Grid>
                    <Grid item>
                      <DisplaySection
                        label={"Trailing Stop loss"}
                        value={trailingStopLoss}
                      />
                      <DisplaySection
                        label={"Daily Gain / Loss"}
                        value={3000}
                      />
                    </Grid>
                    <Grid item>
                      <DisplaySection label={"Quantity"} value={quantity} />
                      <DisplaySection label={"Return"} value={3000} />
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </ListItem>
        );
      })}
    </List>
  );
};

export default PositionList;
