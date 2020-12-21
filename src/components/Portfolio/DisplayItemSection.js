import React from "react";
import { Grid, Typography } from "@material-ui/core";

const DisplayItemSection = ({
  label,
  value,
  variant,
  icon,
  className,
  textStyle,
  labelVariant
}) => {
  return (
    <Grid container direction="column" justify="center">
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
  );
};

export default DisplayItemSection;
