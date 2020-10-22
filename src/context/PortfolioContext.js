import createDataContext from "./createDataContext";
import app from "../config/firebase";
import Stock from "../api/Stock";
import _ from "underscore";
import { stockList } from "../data/stockList";

const portfolioReducer = (state, action) => {
  switch (action.type) {
    case "add_position":
      return {
        ...state,
        portfolioArray: [...state.portfolioArray, action.payload]
      };
    case "get_position":
      return { ...state, portfolioArrayService: action.payload };

    default:
      return state;
  }
};

const getStockData = async stockCode => {
  stockCode = stockCode + ".NS";
  const baseUrl = `/get-nse-stocks?stockCode=${stockCode}`;
  try {
    var response = await Stock.get(baseUrl);
    var stockResponse = response.data[stockCode];
    return stockResponse;
  } catch (err) {}
};

const getStockCode = stockName => {
  var response = _.findWhere(stockList, { StockName: stockName });

  var stockCode = response.Symbol;

  return stockCode;
};

const addPosition = dispatch => async (data, authorId) => {
  const db = app.firestore();
  var stockCode = getStockCode(data.stockName);

  await db.collection("openPositions").add({
    stockName: data.stockName,
    stockCode,
    buyPrice: data.buyPrice,
    targetPrice: data.targetPrice,
    stopLoss: data.stopLoss,
    quantity: data.quantity,
    trailingStopLoss: data.trailingStopLoss,
    modifiedDate: Date.now(),
    date: data.date,
    authorId
  });
  dispatch({
    type: "add_position",
    payload: {
      stockName: data.stockName,
      stockCode,
      buyPrice: data.buyPrice,
      targetPrice: data.targetPrice,
      stopLoss: data.stopLoss,
      quantity: data.quantity,
      trailingStopLoss: data.trailingStopLoss,
      modifiedDate: Date.now(),
      date: data.date,
      authorId
    }
  });
};

export const { Provider, Context } = createDataContext(
  portfolioReducer,
  { addPosition },
  {
    portfolioArray: [],
    portfolioArrayService: [],
    errorInFetching: false,
    errorInAdding: false,
    duplicateEntry: false
  }
);