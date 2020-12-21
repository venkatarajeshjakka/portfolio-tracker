import React, { useState, useContext } from "react";
import {
  IconButton,
  List,
  ListItem,
  makeStyles,
  Menu,
  MenuItem,
  Grid,
  Box,
  Typography
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { formatCurrency } from "../../extensions/Formatters";
import ProgressBar from "../ProgressBar";
import { individualPosition } from "../../mappers/PositionDataFormatter";
import DisplayItemSection from "./DisplayItemSection";
import moment from "moment";
import { withRouter } from "react-router-dom";
import { Context as PortfolioContext } from "../../context/PortfolioContext";
import { AlertDialog } from "../Dialog";
const ITEM_HEIGHT = 48;
const options = ["Buy", "Sell", "Delete", "Edit"];
const useStyles = makeStyles(theme => ({
  root: {
    height: "100%"
  },
  progress: {
    marginVertical: theme.spacing(1)
  },
  moreIcon: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
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
  },
  box: {
    backgroundColor: "#E1EFFF",
    padding: theme.spacing(2),
    borderRadius: theme.spacing(2)
  }
}));

const FistColumnItem = ({
  label,
  value,
  icon,
  labelVariant,
  className,
  textStyle,
  variant
}) => {
  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="center"
      spacing={3}
    >
      <Grid item>
        <Typography
          color="textSecondary"
          display="inline"
          variant={labelVariant ? labelVariant : "body2"}
        >
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
const FirstColumn = ({ boxStyle, values }) => {
  const { percentage, targetPrice, buyPrice, buyDate, quantity } = values;
  return (
    <Box className={boxStyle}>
      <ProgressBar
        bgcolor={"#6a1b9a"}
        completed={parseInt(percentage.toFixed(2), 10)}
      />

      <FistColumnItem
        label={"Target Price"}
        value={formatCurrency(targetPrice.toFixed(2))}
      />
      <FistColumnItem
        label={"Buy Price"}
        value={formatCurrency(buyPrice.toFixed(2))}
      />

      <FistColumnItem
        label={"Buy Date"}
        value={moment(buyDate).format("MMMM Do YYYY")}
      />

      <FistColumnItem label={"Quantity"} value={quantity} />
    </Box>
  );
};
const PositionList = ({ className, history, data, ...rest }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [poistionValue, setValue] = useState(null);
  const open = Boolean(anchorEl);
  const [openAlert, setOpenAlert] = useState(false);
  const { addPositionId, deletePosition, clearPositionId } = useContext(
    PortfolioContext
  );
  const handleRedirection = value => {
    switch (value) {
      case "Buy":
        history.push("/add-position");
        break;
      case "Sell":
        addPositionId(poistionValue);
        history.push("/sell-position");
        break;
      case "Delete":
        deletePositionEntry();
        break;
      case "Edit":
        addPositionId(poistionValue);
        history.push("/edit-position");
      default:
    }
  };
  const handleClickAlertOpen = () => {
    setOpenAlert(true);
  };

  const handleAlertClose = () => {
    setValue("");
    setOpenAlert(false);
    clearPositionId("");
  };

  const deletePositionEntry = () => {
    handleClickAlertOpen();
  };
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyles();

  const { ltp, change, changePercentage } = data.summary;

  return (
    <div>
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
              <IconButton
                className={classes.moreIcon}
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={event => {
                  setValue(id);
                  handleClick(event);
                }}
                edge="end"
                size="small"
              >
                <MoreVertIcon />
              </IconButton>

              <Grid container justify="space-between" spacing={3}>
                <Grid item xs={3}>
                  <FirstColumn
                    boxStyle={classes.box}
                    progressClass={classes.progress}
                    values={{
                      percentage: individualResponse.targetPercentage,
                      targetPrice,
                      buyPrice,
                      buyDate: date,
                      quantity
                    }}
                  />
                </Grid>
                <Grid item xs={3}>
                  <DisplayItemSection
                    label={"Stop loss"}
                    value={formatCurrency(stopLoss)}
                  />
                  <DisplayItemSection
                    label={"Trailing Stop loss"}
                    value={formatCurrency(trailingStopLoss)}
                  />
                </Grid>

                <Grid item xs={3}>
                  <DisplayItemSection
                    label={"Investment Value"}
                    value={formatCurrency(
                      individualResponse.investmentValue.toFixed(2)
                    )}
                  />
                  <DisplayItemSection
                    label={"Current Value"}
                    value={formatCurrency(
                      individualResponse.currentValue.toFixed(2)
                    )}
                  />
                </Grid>
                <Grid item xs={3}>
                  <DisplayItemSection
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
                  />
                  <DisplayItemSection
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
                  />
                </Grid>
              </Grid>
            </ListItem>
          );
        })}
      </List>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch"
          }
        }}
      >
        {options.map(option => (
          <MenuItem
            key={option}
            selected={option === "Pyxis"}
            onClick={() => {
              handleClose();
              handleRedirection(option);
            }}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>

      <AlertDialog
        onAgree={() => {
          deletePosition(poistionValue);
          handleAlertClose();
          history.push("/portfolio");
        }}
        open={openAlert}
        handleClose={handleAlertClose}
      />
    </div>
  );
};

export default withRouter(PositionList);
