import React from "react";
import DialogTitle from "./DialogTitle";
import { Dialog, DialogContent, DialogContentText } from "@material-ui/core";

const FormDialog = ({ children, open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title" onClose={onClose}>
        Subscribe
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          To subscribe to this website, please enter your email address here. We
          will send updates occasionally.
        </DialogContentText>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default FormDialog;
export { FormDialog };
