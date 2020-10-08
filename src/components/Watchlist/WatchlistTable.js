import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  Paper,
  TableRow,
  TablePagination,
  TableContainer,
  TableBody,
  Table,
  TableCell,
  IconButton
} from "@material-ui/core";
import { Delete as DeleteIcon } from "@material-ui/icons";
import { StyledTableHead } from "../Table";
import { formatCurrency } from "../../extensions/Formatters";
import _ from "underscore";
const useStyles = makeStyles({
  root: {
    width: "100%"
  },
  container: {
    maxHeight: 550
  },
  tableleftBorder: {
    borderTop: 0,
    borderRight: 0,
    borderLeftWidth: 3,
    borderStyle: "solid"
  }
});

const columns = [
  { id: "stockName", label: "Stock Name", minWidth: 170 },
  { id: "price", label: "Price", minWidth: 100, align: "right" },
  { id: "high", label: "High", minWidth: 100, align: "right" },
  { id: "low", label: "Low", minWidth: 100, align: "right" },
  {
    id: "previousClose",
    label: "Previous Close",
    minWidth: 100,
    align: "right"
  },
  {
    id: "change",
    label: "Change",
    minWidth: 100,
    align: "right"
  },
  {
    id: "changePercentage",
    label: "% Change",
    minWidth: 100,
    align: "right"
  },
  {
    id: "action",
    label: "Action",
    minWidth: 100,
    align: "right"
  }
];

const WatchlistTable = ({ stockData, watchListArray, showAction }) => {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <StyledTableHead columns={columns} showAction={showAction} />
          <TableBody>
            {watchListArray
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(row => {
                var stockCode = row.stockCode;

                stockCode = stockCode + ".NS";
                var data = _.findWhere(stockData, { stockCode: stockCode });

                const {
                  longName,
                  regularMarketChange,
                  regularMarketChangePercent,
                  regularMarketPrice,
                  regularMarketDayLow,
                  regularMarketDayHigh,
                  regularMarketPreviousClose
                } = data.data.price;
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    <TableCell
                      className={classes.tableleftBorder}
                      style={{
                        borderLeftColor:
                          regularMarketChange.toFixed(2) < 0
                            ? "#ff0000"
                            : "#32cd32"
                      }}
                      component="th"
                      scope="row"
                    >
                      {longName}
                    </TableCell>
                    <TableCell style={{ width: 160 }} align="right">
                      {formatCurrency(regularMarketPrice)}
                    </TableCell>
                    <TableCell style={{ width: 160 }} align="right">
                      {formatCurrency(regularMarketDayHigh)}
                    </TableCell>
                    <TableCell style={{ width: 160 }} align="right">
                      {formatCurrency(regularMarketDayLow)}
                    </TableCell>
                    <TableCell style={{ width: 160 }} align="right">
                      {formatCurrency(regularMarketPreviousClose)}
                    </TableCell>
                    <TableCell
                      style={{
                        width: 160,
                        color:
                          regularMarketChange.toFixed(2) < 0
                            ? "#ff0000"
                            : "#32cd32"
                      }}
                      align="right"
                    >
                      {regularMarketChange.toFixed(2)}
                    </TableCell>
                    <TableCell
                      style={{
                        width: 160,
                        color:
                          regularMarketChange.toFixed(2) < 0
                            ? "#ff0000"
                            : "#32cd32"
                      }}
                      align="right"
                    >
                      {(regularMarketChangePercent * 100).toFixed(2)}
                    </TableCell>
                    {!showAction ? (
                      <TableCell
                        style={{
                          width: 160
                        }}
                        align="right"
                      >
                        <IconButton color="secondary" onClick={() => {}}>
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    ) : null}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={watchListArray.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default WatchlistTable;
