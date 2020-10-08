import React, { useState, useContext, useEffect } from "react";
import { Container, Grid, CircularProgress, Snackbar } from "@material-ui/core";
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
  getformattedStockArray,
  getFormattStockData
} from "../../mappers/WatchListDataFormatter";
import WatchlistTable from "./WatchlistTable";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

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

  const handleSnackBarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    resetDuplicateEntry(false);
  };

  const render = (stockData, watchListData) => {
    return stockData && watchListData
      ? stockData.length > 0 &&
          watchListData.length > 0 &&
          stockData.length === watchListData.length
      : false;
  };
  const {
    getWatchListArray,
    resetDuplicateEntry,
    state: { watchListArrayService, watchListArray, duplicateEntry }
  } = useContext(WatchListContext);
  const { currentUser } = useContext(AuthContext);
  const currentUserId = currentUser.uid;
  const {
    getStockInfo,
    state: { watchListStockData }
  } = useContext(StockContext);
  useEffect(() => {
    getWatchListArray(currentUserId);
  }, [watchListArray]);

  useEffect(() => {
    if (watchListArrayService) {
      getStockInfo(getStockCodeArray(watchListArrayService));
    }
  }, [watchListArrayService]);

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
        <Grid container spacing={3}>
          <Grid item lg={12} md={12} xl={9} xs={12}>
            {render(watchListStockData, watchListArrayService) ? (
              <WatchlistTable
                stockData={getFormattStockData(watchListStockData)}
                watchListArray={getformattedStockArray(watchListArrayService)}
              />
            ) : (
              <CircularProgress />
            )}
          </Grid>
        </Grid>
      </Container>

      <FormDialog open={open} onClose={handleClose}>
        <WatchListForm onClose={handleClose} />
      </FormDialog>

      <Snackbar
        open={duplicateEntry}
        autoHideDuration={6000}
        onClose={handleSnackBarClose}
      >
        <Alert onClose={handleSnackBarClose} severity="success">
          This is a success message!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default withStyles(styles)(Watchlist);
