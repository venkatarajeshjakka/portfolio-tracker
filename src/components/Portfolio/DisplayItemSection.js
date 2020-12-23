import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1)
  }
}));

const DisplayItemSection = ({
  label,
  value,
  variant,
  icon,
  className,
  textStyle,
  labelVariant,
  alignItems
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems={alignItems}
        spacing={1}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            display="inline"
            variant={labelVariant ? labelVariant : "body2"}
          >
            {label}
          </Typography>
        </Grid>
        <Grid className={className} item>
          {icon}
          <Typography
            className={textStyle}
            color="textPrimary"
            display="inline"
            variant={variant ? variant : "subtitle2"}
          >
            {value}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default DisplayItemSection;
