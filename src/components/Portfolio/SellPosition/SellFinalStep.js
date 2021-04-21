import React, { useEffect, useState, useContext } from "react";
import Confetti from "react-dom-confetti";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import { CheckCircleOutline as CheckCircleOutlineIcon } from "@material-ui/icons";
import { Context as TransactionContext } from "../../../context/SellTransactionContext";
const config = {
  angle: 90,
  spread: 360,
  startVelocity: 40,
  elementCount: 100,
  dragFriction: 0.12,
  duration: 3500,
  stagger: 3,
  width: "10px",
  height: "15px",
  perspective: "500px",
  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
};

const styles = theme => ({
  container: {
    flexGrow: 1,
    marginTop: theme.spacing(7),
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2)
  },
  topSection: {
    display: "flex",
    justifyContent: "center"
  },
  iconStyle: {
    paddingRight: theme.spacing(1),
    color: green[500]
  },
  successFont: {
    color: green[500]
  }
});

const SellFinalStep = props => {
  const { classes } = props;
  const [active, setActive] = useState(true);
  const {
    clearTransaction,
    state: { transactionItem }
  } = useContext(TransactionContext);

  useEffect(() => {
    setTimeout(() => {
      setActive(false);
    }, 4000);
  }, []);

  const {
    stockName,
    buyPrice,
    sellPrice,
    sellDate,
    quantity,
    buyDate
  } = transactionItem;
  return (
    <main className={classes.container}>
      <Confetti active={!active} config={config} />
      <div className={classes.topSection}>
        <CheckCircleOutlineIcon
          fontSize="large"
          className={classes.iconStyle}
        />

        <Typography
          component="h5"
          variant="h5"
          align="center"
          className={classes.successFont}
        >
          {"Transaction Successful !"}
        </Typography>
      </div>
    </main>
  );
};

export default withRouter(withStyles(styles)(SellFinalStep));
