import React from "react";
import { TableRow, TableHead } from "@material-ui/core";
import StyledTableCell from "./StyledTableCell";

const StyledTableHead = ({ columns, showAction }) => {
  return (
    <TableHead>
      <TableRow>
        {columns.map(column => {
          return showAction && column.id == "action" ? null : (
            <StyledTableCell
              key={column.id}
              align={column.align}
              style={{ minWidth: column.minWidth }}
            >
              {column.label}
            </StyledTableCell>
          );
        })}
      </TableRow>
    </TableHead>
  );
};

export default StyledTableHead;
export { StyledTableHead };
