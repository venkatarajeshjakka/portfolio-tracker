import { withStyles } from "@material-ui/core/styles";
import { TableCell } from "@material-ui/core";

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

export { StyledTableCell };
export default StyledTableCell;
