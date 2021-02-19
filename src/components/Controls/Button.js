import React from "react";
import { Button as MuiButton, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1)
  },
  label: {
    textTransform: "none",
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const Button = props => {
  const { text, size, color, variant, onClick, ...other } = props;
  const classes = useStyles();

  return (
    <MuiButton
      variant={variant || "contained"}
      size={size || "large"}
      color={color || "primary"}
      onClick={onClick}
      {...other}
      classes={{ root: classes.root, label: classes.label }}
      className={classes.Button}
    >
      {text}
    </MuiButton>
  );
};

export default Button;
export { Button };
