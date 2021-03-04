import React from "react";
import { Input, DatePicker } from "../../Controls";
import BaseFormActionButtons from "./BaseFormActionButtons";
import { makeStyles, InputAdornment } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1)
  }
}));
const SellBaseForm = ({
  selectedDate,
  handleDateChange,
  stockName,
  handleChange,
  values,
  handleSubmit,
  handleReset
}) => {
  const classes = useStyles();
  return (
    <form
      className={classes.form}
      noValidate
      autoComplete="off"
      onSubmit={e => e.preventDefault() && false}
    >
      <Input
        name="stockName"
        label="Stock Name"
        value={stockName}
        fullWidth={true}
        id="outlined-adornment-amount"
        margin="normal"
      />

      <Input
        name="sellPrice"
        label="Sell Price"
        onChange={handleChange("sellPrice")}
        value={values.sellPrice}
        fullWidth={true}
        id="outlined-adornment-amount"
        margin="normal"
        type="number"
        InputProps={{
          startAdornment: <InputAdornment position="start">₹</InputAdornment>
        }}
      />
      <Input
        name="quantity"
        label="Quantity"
        onChange={handleChange("quantity")}
        value={values.quantity}
        fullWidth={true}
        id="outlined-adornment-amount"
        margin="normal"
        type="number"
      />

      <DatePicker
        label="Date"
        value={selectedDate}
        onChange={handleDateChange}
      />
      <BaseFormActionButtons
        handleSubmit={handleSubmit}
        handleReset={handleReset}
      />
    </form>
  );
};

export default SellBaseForm;
export { SellBaseForm }
