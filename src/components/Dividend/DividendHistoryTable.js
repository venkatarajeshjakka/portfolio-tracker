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
  TableHead,
  IconButton
} from "@material-ui/core";

import { Delete as DeleteIcon, Edit as EditIcon } from "@material-ui/icons";
import {
  StyledTableCell,
  StyledTableRow,
  TablePaginationActions
} from "../Table";
import { formatCurrency } from "../../extensions/Formatters";
import moment from "moment";
const useStyles = makeStyles({
  table: {
    minWidth: 500
  }
});

export default function DividendHistoryTable({ data, onDelete, onEdit }) {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

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
            <StyledTableCell align="center">Date</StyledTableCell>
            <StyledTableCell align="center">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : data
          ).map(row => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.stockName}
              </StyledTableCell>
              <StyledTableCell style={{ width: 160 }} align="right">
                {formatCurrency(row.amount)}
              </StyledTableCell>
              <StyledTableCell style={{ width: 160 }} align="center">
                {moment(row.date).format("ll")}
              </StyledTableCell>
              <StyledTableCell style={{ width: 160 }} align="center">
                <IconButton
                  color="secondary"
                  onClick={() => {
                    onDelete(row.id);
                  }}
                >
                  <DeleteIcon />
                </IconButton>
                <IconButton
                  color="primary"
                  onClick={() => {
                    onEdit(row.id);
                  }}
                >
                  <EditIcon />
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={3}
              count={data.length}
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
