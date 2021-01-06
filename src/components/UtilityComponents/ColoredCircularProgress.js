import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { CircularProgress } from "@material-ui/core";
import deepPurple from "@material-ui/core/colors/deepPurple";
const defaultSize = 50;
const ColoredCircularProgressComponent = props => {
  const { classes, size } = props;
  return <CircularProgress {...props} classes={classes} size={size} />;
};
const ColoredCircularProgress = props => {
  const WithStylesComponent = withStyles(theme => ({
    colorPrimary: {
      color: deepPurple[500]
    },
    root: {
      top: `calc(50% - ${props.size / 2}px)`,
      left: `calc(50% - ${props.size / 2}px)`,
      position: "absolute"
    }
  }))(ColoredCircularProgressComponent);
  return <WithStylesComponent {...props} />;
};

ColoredCircularProgress.propTypes = {
  classes: PropTypes.object,
  size: PropTypes.number
};
ColoredCircularProgress.defaultProps = {
  size: defaultSize
};

export default ColoredCircularProgress;
