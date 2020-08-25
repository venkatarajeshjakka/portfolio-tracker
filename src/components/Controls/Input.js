import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  }
}));
const Input = props => {
  const {
    name,
    label,
    value,
    error = null,
    onChange,
    fullWidth,
    id,
    margin,...other
  } = props;
  const classes = useStyles();

  return (
    <TextField
      variant="outlined"
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      {...(error && { error: true, helperText: error })}
      className={classes.textField}
      fullWidth={fullWidth}
      id={id}
      margin={margin}
      {...other}
    />
  );
};

export default Input;

export { Input };
