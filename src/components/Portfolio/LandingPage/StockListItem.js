import React, { useState } from "react";
import {
  Typography,
  IconButton,
  Grid,
  makeStyles,
  Menu,
  MenuItem
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { WorkOutlineOutlined as WorkOutlineOutlinedIcon } from "@material-ui/icons";
import { Button as OutlineButton } from "../../Controls";
import DisplayItemSection from "../DisplayItemSection";
import { useHistory, Link } from "react-router-dom";
import { formatCurrency } from "../../../extensions/Formatters";
import _ from "underscore";
import { AlertDialog, FormDialog } from "../../Dialog";
import Breakdown from "./Breakdown";

const ITEM_HEIGHT = 48;
const options = ["Details", "Sell", "BreakDown"];
const useStyles = makeStyles(theme => ({
  item: {
    padding: theme.spacing(1),
    width: "100%",
    borderBottom: "1px solid",
    borderBottomColor: "#dde0e4",
    display: "block",
    position: "relative",
    "&:hover": {
      position : 'relative',
      boxShadow : '0 0.625rem 0.875rem rgba(0,116,129,0.32)'
    }
  },
  title_section: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    color: "#33B5FF",
    textTransform: "uppercase"
  },
  title_tag: {
    color: "#ff5942",
    backgroundColor: "rgba(255,89,66,.1)",
    padding: "0.25rem 0.5rem 0.25rem",
    margin: theme.spacing(1),
    textalign: "center",
    borderRadius: "0.25rem",
    fontSize: "0.75rem"
  },
  tiltle_light: {
    fontSize: "0.875rem",
    color: "#81878c"
  },
  bottom: {
    marginTop: theme.spacing(2),
    paddingRight: theme.spacing(1)
  },
  heading: {
    paddingTop: theme.spacing(1),
    paddingLeft: theme.spacing(1)
  },
  price: {
    fontSize: "0.875rem",
    color: "#040E5E",
    marginRight: theme.spacing(2),
    fontWeight: "400"
  },
  red: {
    color: "#ff0000"
  },
  green: {
    color: "#32cd32"
  },
  red_font: {
    fontSize: "0.875rem",
    color: "#ff0000",
    paddingRight: theme.spacing(1)
  },
  green_font: {
    fontSize: "0.875rem",
    color: "#32cd32",
    fontWeight: "400",
    paddingRight: theme.spacing(1)
  },
  price_section: {
    marginBottom: theme.spacing(1)
  },
  statsIcon: {
    marginRight: theme.spacing(1)
  },
  qty: {
    display: "flex",
    padding: theme.spacing(1),
    justifyContent: "center",
    alignItems: "center"
  }
}));
const StockListItem = ({ data, historyData }) => {
  const classes = useStyles();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [openAlert, setOpenAlert] = useState(false);
  const [stock, setStock] = useState("");
  const [breakDownValue, setBreakDownValue] = useState(null);
  console.log(historyData);
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickAlertOpen = () => {
    setOpenAlert(true);
  };

  const handleAlertClose = () => {
    setStock("");
    setOpenAlert(false);
    setBreakDownValue(null);
  };

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleRedirection = value => {
    switch (value) {
      case "Details":
        history.push(`/position-details/${data.stockCode}`);
        break;

      case "BreakDown":
        setBreakDownValue(_.where(historyData, { stockCode: stock }));
        handleClickAlertOpen();
        break;
      default:
    }
  };

  return (
    <div className={classes.item}>
      <Grid container justify="space-between" alignItems="center">
        <Grid item>
          <div className={classes.heading}>
            <Typography
              className={classes.title_section}
              align={"left"}
              variant="h6"
            >
              <span
                onClick={() => {
                  history.push(`/position-details/${data.stockCode}`);
                }}
              >
                {data.stockName}
              </span>
              <span className={classes.title_tag}>SIP over due</span>
            </Typography>
            <div className={classes.price_section}>
              <span className={classes.price}>{formatCurrency(data.ltp)}</span>

              <span
                className={
                  data.change > 0 ? classes.green_font : classes.red_font
                }
              >
                {`${formatCurrency(data.change)}(${data.changePercentage}%)`}
              </span>
            </div>
            <span className={classes.tiltle_light}>As of now 21/1/2021</span>
          </div>
        </Grid>
        <Grid item>
          <Grid container justify="flex-start">
            <Grid item>
              <OutlineButton
                component={Link}
                to="/add-position"
                variant="outlined"
                color="primary"
                text={"Add"}
              />
            </Grid>
            <Grid item>
              <IconButton
                className={classes.moreIcon}
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={event => {
                  setStock(data.stockCode);
                  handleClick(event);
                }}
                edge="end"
                size="small"
              >
                <MoreVertIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        className={classes.bottom}
        container
        justify="space-between"
        alignItems="center"
      >
        <Grid item>
          <DisplayItemSection
            variant={"h6"}
            label={"Current Value"}
            value={formatCurrency(data.current)}
            alignItems={"center"}
          />
        </Grid>
        <Grid item>
          <DisplayItemSection
            variant={"h6"}
            label={"Daily Gain"}
            value={formatCurrency(data.dailyGain)}
            alignItems={"center"}
            textStyle={data.dailyGain > 0 ? classes.green : classes.red}
          />
        </Grid>
        <Grid item>
          <DisplayItemSection
            variant={"h6"}
            label={"Returns"}
            value={`${formatCurrency(data.profitOrLoss)}(${
              data.profirOrLossPercentage
            } %)`}
            alignItems={"flex-start"}
            textStyle={data.profitOrLoss > 0 ? classes.green : classes.red}
          />
        </Grid>
        <Grid item>
          <div className={classes.qty}>
            <WorkOutlineOutlinedIcon
              className={classes.statsIcon}
              color="primary"
            />
            <Typography color="textSecondary" display="inline" variant="body2">
              {data.quantity} / {`Avg.${formatCurrency(data.avgPrice)}`}
            </Typography>
          </div>
        </Grid>
      </Grid>
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

      <FormDialog open={openAlert} onClose={handleAlertClose}>
        <Breakdown data={breakDownValue} />
      </FormDialog>
    </div>
  );
};

export { StockListItem };
