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
import { AlertDialog, FormDialog } from "../Dialog";
import AddPortfolioForm from "./AddPortfolioForm";
import { Red, Green } from "../../color";
import StockAlert from "./StockAlert";

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
    color: Red.dafault,
    paddingRight: theme.spacing(1)
  },
  green: {
    color: Green.default,
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
      spacing={4}
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
const FirstColumn = ({ boxStyle, values, progressClass }) => {
  const { percentage, targetPrice, buyPrice, buyDate, quantity } = values;
  return (
    <Column>
      <Box className={boxStyle}>
        <div className={progressClass}>
          <ProgressBar
            bgcolor={"#6a1b9a"}
            completed={parseInt(percentage.toFixed(2), 10)}
          />
        </div>
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
          value={moment(buyDate).format("MMM Do YY")}
        />

        <FistColumnItem label={"Quantity"} value={quantity} />
      </Box>
    </Column>
  );
};

const Column = ({ children }) => {
  return (
    <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
      {children}
    </Grid>
  );
};

const SecondSub = ({
  children,
  buyPrice,
  targetPercentage,
  ltp,
  stoploss,
  trailingStoploss
}) => {
  return (
    <Grid item xs={12} sm={9} md={9} lg={9} xl={9}>
      <Grid container direction="column">
        <Grid item>
          <Grid container justify="space-evenly" spacing={3}>
            {children}
          </Grid>
        </Grid>
        <Grid item>
          <StockAlert
            buyPrice={buyPrice}
            targetPercentage={targetPercentage}
            ltp={ltp}
            stoploss={stoploss}
            trailingStoploss={trailingStoploss}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
const SecondColumn = ({ stopLoss, trailingStopLoss }) => {
  return (
    <Column>
      <DisplayItemSection
        label={"Stop loss"}
        value={formatCurrency(stopLoss)}
      />
      <DisplayItemSection
        label={"Trailing Stop loss"}
        value={formatCurrency(trailingStopLoss)}
      />
    </Column>
  );
};

const ThirdColumn = ({ investmentValue, currentValue }) => {
  return (
    <Column>
      <DisplayItemSection
        label={"Investment Value"}
        value={formatCurrency(investmentValue.toFixed(2))}
      />
      <DisplayItemSection
        label={"Current Value"}
        value={formatCurrency(currentValue.toFixed(2))}
      />
    </Column>
  );
};

const PositionList = ({ className, history, data, ...rest }) => {
  const { ltp, change, changePercentage, stockCode } = data.summary;
  const [anchorEl, setAnchorEl] = useState(null);
  const [poistionValue, setValue] = useState(null);
  const open = Boolean(anchorEl);
  const [openAlert, setOpenAlert] = useState(false);
  const [openAddAlert, setOpenAddAlert] = useState(false);

  const { addPositionId, deletePosition, clearPositionId } = useContext(
    PortfolioContext
  );
  const handleRedirection = value => {
    switch (value) {
      case "Buy":
        handleClickAddAlertOpen();

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

  const handleClickAddAlertOpen = () => {
    setOpenAddAlert(true);
  };

  const handleAddAlertClose = () => {
    setOpenAddAlert(false);
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

              <Grid container justify="space-between" spacing={2}>
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
                <SecondSub
                  buyPrice={buyPrice}
                  stoploss={stopLoss}
                  trailingStoploss={trailingStopLoss}
                  targetPercentage={individualResponse.targetPercentage}
                  ltp={ltp}
                >
                  <SecondColumn
                    stopLoss={stopLoss}
                    trailingStopLoss={trailingStopLoss}
                  />
                  <ThirdColumn
                    investmentValue={individualResponse.investmentValue}
                    currentValue={individualResponse.currentValue}
                  />

                  <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
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
                </SecondSub>
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
      <FormDialog open={openAddAlert} onClose={handleAddAlertClose}>
        <AddPortfolioForm
          onClose={() =>{
            handleAddAlertClose()
            history.push("/portfolio");
          }}
          stockCode={stockCode}
        />
      </FormDialog>
    </div>
  );
};

export default withRouter(PositionList);
