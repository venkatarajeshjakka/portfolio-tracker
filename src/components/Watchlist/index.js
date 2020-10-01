import React, { useState, useContext, useEffect } from "react";
import { Container, Grid } from "@material-ui/core";
import PageHeader from "../shared/PageHeader";
import { withStyles } from "@material-ui/core/styles";
import {
  AddOutlined as AddOutlinedIcon,
  BookmarkRounded as BookmarkRoundedIcon
} from "@material-ui/icons";
import { Button } from "../Controls";
import WatchListForm from "./WatchListForm";
import { FormDialog } from "../Dialog";
import { Context as StockContext } from "../../context/StockContext";
import { Context as WatchListContext } from "../../context/WatchListContext";
import { AuthContext } from "../../context/AuthContext";
import {
  getStockCodeArray,
  getformattedStockArray
} from "../../mappers/WatchListDataFormatter";
const styles = theme => ({
  button: {
    margin: theme.spacing(5),
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
});

const Watchlist = ({ classes }) => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const {
    getWatchListArray,
    state: { watchListArrayService }
  } = useContext(WatchListContext);
  const { currentUser } = useContext(AuthContext);
  const currentUserId = currentUser.uid;

  useEffect(() => {
    getWatchListArray(currentUserId);
  }, []);

  console.log(watchListArrayService);
  if (watchListArrayService) {
    var stockArray = getformattedStockArray(watchListArrayService);
    console.log(stockArray);

    var stockCodeArray = getStockCodeArray(watchListArrayService);
    console.log(stockCodeArray);
  }
  return (
    <div className={classes.root}>
      <Container>
        <PageHeader
          title="Watchlist"
          subTitle="Add Stocks to watch"
          icon={<BookmarkRoundedIcon fontSize="large" />}
        />
        <Grid
          container
          spacing={3}
          direction="row"
          justify="flex-end"
          alignItems="center"
          className={classes.Button}
        >
          <Button
            variant="outlined"
            color="primary"
            onClick={handleClickOpen}
            text={"Add"}
            startIcon={<AddOutlinedIcon />}
          />
        </Grid>
      </Container>
      <FormDialog open={open} onClose={handleClose}>
        <WatchListForm onClose={handleClose} />
      </FormDialog>
    </div>
  );
};

export default withStyles(styles)(Watchlist);
