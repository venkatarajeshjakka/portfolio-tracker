import React, { useState } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import {
  Paper,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@material-ui/core";
import DividendForm from "./DividendForm";
import PageHeader from "../shared/PageHeader";
import { AttachMoneyRounded as AttachMoneyRoundedIcon } from "@material-ui/icons";
import { Button } from "../Controls";

const styles = theme => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3)
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
      <Button
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
        text={"Open"}
      />

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <DividendForm />
        </DialogContent>
      </Dialog>

      <Paper className="classes.pageContent"></Paper>
    </>
  );
};

export default withStyles(styles)(Dividend);
