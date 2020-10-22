import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const RedTextTypography = withStyles({
  root: {
    color: "#ff0000"
  }
})(Typography);

export { RedTextTypography };
