import "date-fns";
import React from "react";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  }
}));
const DatePicker = props => {
  const { label, value, onChange } = props;
  const classes = useStyles();
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        margin="normal"
        id="date-picker-dialog"
        label={label}
        format="MM/dd/yyyy"
        value={value}
        onChange={onChange}
        KeyboardButtonProps={{
          "aria-label": "change date"
        }}
        className={classes.textField}
      />
    </MuiPickersUtilsProvider>
  );
};

export default DatePicker;

export { DatePicker };
