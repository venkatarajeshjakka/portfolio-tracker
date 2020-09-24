import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";
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

const useStyles = makeStyles({
  table: {
    minWidth: 500
  }
});

export default function DividendHistoryTable({ data }) {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  var formattedData = data.map(item => {
    return {
      id: item.id,
      stockName: item.data.stockName,
      amount: item.data.amount,
      date: moment(new Date(item.data.date.seconds * 1000)).format("ll")
    };
  });

  

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
            <StyledTableCell align="right">Date</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? formattedData.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              )
            : formattedData
          ).map(row => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.stockName}
              </StyledTableCell>
              <StyledTableCell style={{ width: 160 }} align="right">
                {row.amount}
              </StyledTableCell>
              <StyledTableCell style={{ width: 160 }} align="right">
                {row.date}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={3}
              count={formattedData.length}
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
