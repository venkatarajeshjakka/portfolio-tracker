import React, { useState, useContext } from "react";
import {
  IconButton,
  List,
  ListItem,
  makeStyles,
  Menu,
  MenuItem,
  Grid
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { formatCurrency } from "../../extensions/Formatters";
import CircleProgresBar from "../CircularProgressBar";
import { individualPosition } from "../../mappers/PositionDataFormatter";
import DisplayItemSection from "./DisplayItemSection";
import moment from "moment";
import { withRouter } from "react-router-dom";
import { Context as PortfolioContext } from "../../context/PortfolioContext";
import { AlertDialog } from "../Dialog";
const ITEM_HEIGHT = 48;
const options = ["Buy", "Sell", "Delete"];
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

              <Grid
                container
                justify="space-between"
                alignItems="center"
                spacing={1}
              >
                <Grid item xs={3}>
                  <DisplayItemSection
                    label={"Buy Price"}
                    value={formatCurrency(buyPrice)}
                  />
                  <DisplayItemSection
                    label={"Stop loss"}
                    value={formatCurrency(stopLoss)}
                  />

                  <DisplayItemSection
                    label={"Trailing Stop loss"}
                    value={formatCurrency(trailingStopLoss)}
                  />
                  <DisplayItemSection
                    label={"Buy Date"}
                    value={moment(date).format("MMMM Do YYYY")}
                  />
                  <DisplayItemSection label={"Quantity"} value={quantity} />
                </Grid>
                <Grid item xs={3}>
                  <DisplayItemSection
                    label={"Target Price"}
                    value={formatCurrency(targetPrice.toFixed(2))}
                  />
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

                <Grid item xs={3}>
                  <div className={classes.progress}>
                    <CircleProgresBar
                      percentage={parseInt(
                        individualResponse.targetPercentage.toFixed(2),
                        10
                      )}
                    />
                  </div>
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
