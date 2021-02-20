import React from "react";
import clsx from "clsx";
import { Typography, makeStyles } from "@material-ui/core";

const styles = makeStyles(theme => ({
  root: {
    display: "flex",
    backgroundColor: props => props.background,
    flexDirection: "row",
    justifyContent: 'center',
    paddingLeft : theme.spacing(2),
    paddingRight : theme.spacing(2),
    paddingTop : theme.spacing(1),
    color: props => props.background ? 'white': "black",
    textTransform : 'uppercase',
    fontWeight : 'bold',
    borderRadius: "1rem"
  }
}));
const Chip = ({ className, children, label, ...props }) => {
  const classes = styles(props);
  return (
    <div className={clsx(classes.root, className)}>
      <Typography variant="subtitle2" display="block" gutterBottom>
        {label}
      </Typography>
      <div>{children}</div>
    </div>
  );
};

export default Chip;
