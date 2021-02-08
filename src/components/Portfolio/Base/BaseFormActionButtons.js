import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "../../Controls";
import SaveIcon from "@material-ui/icons/Save";

const useStyles = makeStyles(theme => ({
  button: {
    marginTop: theme.spacing(3),
    display: "flex"
  }
}));

const BaseFormActionButtons = ({ handleReset, handleSubmit }) => {
  const classes = useStyles();
  return (
    <div className={classes.button}>
      <Button
        variant="outlined"
        color="primary"
        size="large"
        text={"Reset"}
        onClick={handleReset}
      />
      <Button
        text={"Save"}
        autoFocus
        startIcon={<SaveIcon />}
        size="large"
        onClick={handleSubmit}
      />
    </div>
  );
};

export default BaseFormActionButtons;
export { BaseFormActionButtons };
