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
import { individualPosition } from "../../mappers/PositionDataFormatter";
import {
  WorkOutlineOutlined as WorkOutlineOutlinedIcon,
  ArrowUpwardOutlined as ArrowUpwardOutlinedIcon,
  ArrowDownwardOutlined as ArrowDownwardOutlinedIcon
} from "@material-ui/icons";

const DisplaySection = ({
  label,
  value,
  variant,
  icon,
  className,
  textStyle
}) => {
  return (
    <Grid container direction="column" justify="center">
      <Grid item>
        <Typography color="textSecondary" display="inline" variant="body2">
          {label}
        </Typography>
      </Grid>
      <Grid className={className} item>
        {icon}
        <Typography
          className={textStyle}
          color="textPrimary"
          display="inline"
          variant={variant ? variant : "subtitle1"}
        >
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
  },
  iconRed: {
    color: "#ff0000",
    marginRight: theme.spacing(1)
  },
  iconGreen: {
    color: "#32cd32",
    marginRight: theme.spacing(1)
  },
  statsItem: {
    alignItems: "center",
    display: "flex"
  },
  red: {
    color: "#ff0000",
    paddingRight: theme.spacing(1)
  },
  green: {
    color: "#32cd32",
    paddingRight: theme.spacing(1)
  }
}));
const PositionList = ({ className, data, ...rest }) => {
  const classes = useStyles();
  console.log(data.history);
  const { ltp, change, changePercentage } = data.summary;

  return (
    <List>
      {data.history.map((product, i) => {
        const {
          id,
          buyPrice,
          date,
          quantity,
          stopLoss,
          targetPrice,
          trailingStopLoss
        } = product;

        var individualResponse = individualPosition(product, ltp, change);

        return (
          <ListItem divider={i < data.history.length - 1} key={id}>
            <IconButton className={classes.moreIcon} edge="end" size="small">
              <MoreVertIcon />
            </IconButton>

            <Box flexGrow={1}>
              <Grid
                container
                justify="space-between"
                alignItems="center"
                spacing={1}
              >
                <Grid item xs={3}>
                  <DisplaySection
                    label={"Buy Price"}
                    value={formatCurrency(buyPrice)}
                  />
                  <DisplaySection
                    label={"Stop loss"}
                    value={formatCurrency(stopLoss)}
                  />

                  <DisplaySection
                    label={"Trailing Stop loss"}
                    value={formatCurrency(trailingStopLoss)}
                  />

                  <DisplaySection label={"Quantity"} value={quantity} />
                </Grid>
                <Grid item xs={3}>
                  <DisplaySection
                    label={"Investment Value"}
                    value={formatCurrency(
                      individualResponse.investmentValue.toFixed(2)
                    )}
                  />
                  <DisplaySection
                    label={"Current Value"}
                    value={formatCurrency(
                      individualResponse.currentValue.toFixed(2)
                    )}
                  />
                  <DisplaySection
                    label={"Daily Gain / Loss"}
                    value={`${formatCurrency(
                      individualResponse.dailyProfitOrLoss.toFixed(2)
                    )} (${changePercentage} %)`}
                    textStyle={
                      individualResponse.dailyProfitOrLoss > 0
                        ? classes.green
                        : classes.red
                    }
                    className={classes.statsItem}
                    icon={
                      individualResponse.dailyProfitOrLoss > 0 ? (
                        <ArrowUpwardOutlinedIcon
                          className={classes.iconGreen}
                        />
                      ) : (
                        <ArrowDownwardOutlinedIcon
                          className={classes.iconRed}
                        />
                      )
                    }
                  />
                  <DisplaySection
                    label={"Return"}
                    value={`${formatCurrency(
                      individualResponse.profitOrLoss.toFixed(2)
                    )} (${individualResponse.profirOrLossPercentage} %)`}
                    textStyle={
                      individualResponse.profitOrLoss > 0
                        ? classes.green
                        : classes.red
                    }
                    className={classes.statsItem}
                    icon={
                      individualResponse.profitOrLoss > 0 ? (
                        <ArrowUpwardOutlinedIcon
                          className={classes.iconGreen}
                        />
                      ) : (
                        <ArrowDownwardOutlinedIcon
                          className={classes.iconRed}
                        />
                      )
                    }
                  />
                </Grid>

                <Grid item xs={3}>
                  <div className={classes.progress}>
                    <CircleProgresBar
                      percentage={individualResponse.targetPercentage.toFixed(
                        2
                      )}
                    />
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
