import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  Paper,
  TableRow,
  TablePagination,
  TableFooter,
  TableContainer,
  TableBody,
  Table,
  TableHead
} from "@material-ui/core";

import {
  StyledTableCell,
  StyledTableRow,
  TablePaginationActions
} from "../Table";
import { formatCurrency } from "../../extensions/Formatters";

const useStyles = makeStyles({
  table: {
    minWidth: 500
  }
});

export default function DividendSummaryTable({ data }) {
  const { groupedResponse } = data;

  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Stock Name</StyledTableCell>
            <StyledTableCell align="right">Amount</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? groupedResponse.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              )
            : groupedResponse
          ).map(row => (
            <StyledTableRow key={row.stockName}>
              <StyledTableCell component="th" scope="row">
                {row.stockName}
              </StyledTableCell>
              <StyledTableCell style={{ width: 160 }} align="right">
                {formatCurrency(row.amount)}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={3}
              count={groupedResponse.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { "aria-label": "rows per page" },
                native: true
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
