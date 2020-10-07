import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  Paper,
  TableRow,
  TablePagination,
  TableContainer,
  TableBody,
  Table,
  TableCell
} from "@material-ui/core";

import { StyledTableHead } from "../Table";
import { formatCurrency } from "../../extensions/Formatters";
import _ from "underscore";
const useStyles = makeStyles({
  root: {
    width: "100%"
  },
  container: {
    maxHeight: 440
  }
});

const columns = [
  { id: "stockName", label: "Stock Name", minWidth: 170 },
  { id: "price", label: "Price", minWidth: 100 },
  {
    id: "change",
    label: "Change",
    minWidth: 100,
    align: "right",
    format: value => value.toFixed(2)
  },
  {
    id: "changePercentage",
    label: "% Change Percentage",
    minWidth: 100,
    align: "right",
    format: value => value.toFixed(2)
  }
];

const WatchlistTable = ({ stockData, watchListArray }) => {
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
          <StyledTableHead columns={columns} />
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
                  regularMarketPrice
                } = data.data.price;
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    <TableCell component="th" scope="row">
                      {longName}
                    </TableCell>
                    <TableCell style={{ width: 160 }}>
                      {formatCurrency(regularMarketPrice)}
                    </TableCell>
                    <TableCell style={{ width: 160 }} align="right">
                      {regularMarketChange.toFixed(2)}
                    </TableCell>
                    <TableCell style={{ width: 160 }} align="right">
                      {(regularMarketChangePercent * 100).toFixed(2)}
                    </TableCell>
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
