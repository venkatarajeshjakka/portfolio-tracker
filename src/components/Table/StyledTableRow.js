import { withStyles } from "@material-ui/core/styles";
import { TableRow } from "@material-ui/core";

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:hover": {
      background: theme.palette.action.hover
    }
  }
}))(TableRow);

export default StyledTableRow;
export { StyledTableRow };
