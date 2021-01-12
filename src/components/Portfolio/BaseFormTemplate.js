import React from "react";
import { Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {},
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3)
    }
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  }
}));

const BaseFormTemplate = ({ title, children }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Typography component="h5" variant="h5" align="left">
        {title}
      </Typography>
      <form
        className={classes.form}
        noValidate
        autoComplete="off"
        onSubmit={e => e.preventDefault() && false}
      >
        {children}
      </form>
    </Paper>
  );
};

export default BaseFormTemplate;
