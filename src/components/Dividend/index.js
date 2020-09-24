import React, { useState, useContext, useEffect } from "react";
import {
  Container,
  Dialog,
  DialogContent,
  DialogContentText,
  Grid,
  CircularProgress
} from "@material-ui/core";
import DividendForm from "./DividendForm";
import PageHeader from "../shared/PageHeader";
import {
  AttachMoneyRounded as AttachMoneyRoundedIcon,
  AddOutlined as AddOutlinedIcon
} from "@material-ui/icons";
import { Button } from "../Controls";
import DialogTitle from "../Dialog/DialogTitle";
import { withStyles } from "@material-ui/core/styles";
import { Context as DividendContext } from "../../context/DividendContext";
import { AuthContext } from "../../context/AuthContext";
import Budget from "./Budget";
import DividendHistoryTable from "./DividendHistoryTable";
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

const Dividend = ({ classes }) => {
  const {
    getDividendHistory,
    state: { dividendArray, dividendArrayService }
  } = useContext(DividendContext);

  const { currentUser } = useContext(AuthContext);
  const currentUserId = currentUser.uid;

  useEffect(() => {
    getDividendHistory(currentUserId);
  }, [currentUserId, dividendArray]);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  console.log(dividendArrayService);
  return (
    <div className={classes.root}>
      <Container>
        <PageHeader
          title="Dividend"
          subTitle="Earning from investment"
          icon={<AttachMoneyRoundedIcon fontSize="large" />}
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
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <Budget />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <Budget />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <Budget />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <Budget />
          </Grid>
          <Grid item lg={8} md={12} xl={9} xs={12}>
            {dividendArrayService && dividendArrayService.length > 0 ? <DividendHistoryTable data={dividendArrayService}/> : <CircularProgress /> }
            
          </Grid>
        </Grid>
      </Container>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title" onClose={handleClose}>
          Subscribe
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <DividendForm onClose={handleClose} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default withStyles(styles)(Dividend);
