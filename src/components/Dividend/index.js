import React, { useState } from "react";
import {
  Paper,
  Dialog,
  DialogContent,
  DialogContentText,
  Grid
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

const styles = theme => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3)
  },
  button: {
    margin: theme.spacing(5)
  }
});
const Dividend = ({ classes }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <PageHeader
        title="Dividend"
        subTitle="Earning from investment"
        icon={<AttachMoneyRoundedIcon fontSize="large" />}
      />
      <Grid container direction="row" justify="flex-end" alignItems="center">
        <Button
          variant="outlined"
          color="primary"
          onClick={handleClickOpen}
          text={"Add"}
          className={classes.Button}
          startIcon={<AddOutlinedIcon />}
        />
      </Grid>

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

      <Paper className="classes.pageContent"></Paper>
    </>
  );
};

export default withStyles(styles)(Dividend);
