import React from "react";
import { makeStyles, Grid } from "@material-ui/core";
import moment from "moment";
const useStyles = makeStyles(theme => ({
  item: {
    padding: theme.spacing(1),
    width: "100%",
    borderBottom: "1px solid",
    borderBottomColor: "#dde0e4",
    display: "block",
    position: "relative",
  },
  container :{
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(1),
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
  }
}));

const Breakdown = ({ data }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {data.map(item => {
        const { buyPrice, date, quantity } = item;
        return (
          <div key={item.id} className={classes.item}>
            <Grid container justify="space-between" alignItems="center">
              <Grid item><p>{moment(date).format("MMM Do YY")}</p></Grid>
              <Grid item><p>{quantity}</p></Grid>
              <Grid item><p>{buyPrice}</p></Grid>
            </Grid>
          </div>
        );
      })}
    </div>
  );
};

export { Breakdown };
export default Breakdown;
