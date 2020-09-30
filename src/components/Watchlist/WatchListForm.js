import React, { useState, useContext } from "react";
import { Grid } from "@material-ui/core";
import { Input, Button } from "../Controls";
import { withRouter } from "react-router";
import SaveIcon from "@material-ui/icons/Save";
import { withStyles } from "@material-ui/core/styles";
import Autocomplete from "@material-ui/lab/Autocomplete";
import _ from "underscore";
import { AuthContext } from "../../context/AuthContext";
import { stockList } from "../../data/stockList";
import { Context as WatchListContext } from "../../context/WatchListContext";
const styles = theme => ({
  root: {
    alignContent: "center",
    alignItems: "center",
    margin: theme.spacing(3)
  }
});
const WatchListForm = props => {
  const [stockName, setStockName] = useState("");

  const { currentUser } = useContext(AuthContext);
  const {
    addWatchList,

    state: {}
  } = useContext(WatchListContext);

  const handleReset = () => {
    setStockName("");
  };

  const handleSubmit = () => {
    const currentUserId = currentUser.uid;

    addWatchList(stockName currentUserId);

    onClose();
  };

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const { classes, onClose } = props;

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={e => e.preventDefault() && false}
    >
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={3}
      >
        <Grid item xs={6}>
          <Autocomplete
            id="free-solo-demo"
            freeSolo
            value={stockName}
            options={stockList.map(option => option.StockName)}
            onChange={(event, newValue) => {
              setStockName(newValue);
            }}
            renderInput={params => (
              <Input
                {...params}
                name="stockName"
                label="Stock Name"
                fullWidth={true}
                id="outlined-full-width"
                margin="normal"
              />
            )}
          />
        </Grid>
      </Grid>

      <Grid container direction="row" justify="center" alignItems="flex-start">
        <Grid item>
          <Button
            text={"Save"}
            autoFocus
            startIcon={<SaveIcon />}
            size="large"
            onClick={handleSubmit}
          />
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            text={"Reset"}
            onClick={handleReset}
          />
        </Grid>
      </Grid>
    </form>
  );
};

export default withRouter(withStyles(styles)(WatchListForm));
