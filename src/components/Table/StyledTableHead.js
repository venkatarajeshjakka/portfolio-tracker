import React from "react";
import { TableRow, TableHead, TableCell } from "@material-ui/core";
import StyledTableCell from './StyledTableCell'

const StyledTableHead = ({ columns }) => {
  return (
    <TableHead>
      <TableRow>
        {columns.map(column => (
          <StyledTableCell
            key={column.id}
            align={column.align}
            style={{ minWidth: column.minWidth }}
          >
            {column.label}
          </StyledTableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default StyledTableHead;
export { StyledTableHead };
