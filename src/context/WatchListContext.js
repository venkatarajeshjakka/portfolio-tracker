import createDataContext from "./createDataContext";
import app from "../config/firebase";
import Stock from "../api/Stock";
import _ from "underscore";
import { stockList } from "../data/stockList";
const watchListReducer = (state, action) => {
  switch (action.type) {
    case "add_watchList":
      return {
        ...state,
        watchListArray: [...state.watchListArray, action.payload]
      };
    case "get_watchList":
      return { ...state, watchListArrayService: action.payload };

    case "delete_watchList":
      return {
        ...state,
        watchListArray: [],
        watchListArrayService: state.watchListArrayService.filter(
          item => item.id !== action.payload
        )
      };

    case "duplicate_watchList":
      return {
        ...state,
        duplicateEntry: action.payload
      };
    default:
      return state;
  }
};

const deleteEntry = dispatch => async documentId => {
  const db = app.firestore();
  await db
    .collection("watchLists")
    .doc(documentId)
    .delete();
  dispatch({
    type: "delete_watchList",
    payload: documentId
  });
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
const addWatchList = dispatch => async (stockName, authorId) => {
  const db = app.firestore();
  var stockCode = getStockCode(stockName);
  var stockResponse = await getStockData(stockCode);

  var stockPrice = stockResponse ? stockResponse.price.regularMarketPrice : 0;

  await db
    .collection("watchLists")
    .where("stockCode", "==", stockCode).get()
    .then(snapshot => {
      if (snapshot.empty) {
        db.collection("watchLists").add({
          stockName,
          stockCode: stockCode,
          date: Date.now(),
          stockPrice: stockPrice,
          authorId
        });
        dispatch({
          type: "add_watchList",
          payload: {
            stockName,
            date: Date.now(),
            stockPrice: stockPrice,
            authorId
          }
        });
      }
      dispatch({
        type: "duplicate_watchList",
        payload: true
      });
    });
};

const resetDuplicateEntry = dispatch => () => {
  dispatch({
    type: "duplicate_watchList",
    payload: false
  });
};
const getWatchListArray = dispatch => async authorId => {
  try {
    var collection = [];
    const db = app.firestore();
    await db
      .collection("watchLists")
      .where("authorId", "==", authorId)
      .get()
      .then(querysnapShot => {
        collection = querysnapShot.docs.map(doc => {
          return {
            id: doc.id,
            data: doc.data()
          };
        });
        dispatch({
          type: "get_watchList",
          payload: collection
        });
      });
  } catch (error) {}
};
export const { Provider, Context } = createDataContext(
  watchListReducer,
  { addWatchList, getWatchListArray, deleteEntry, resetDuplicateEntry },
  {
    watchListArray: [],
    watchListArrayService: [],
    errorInFetching: false,
    errorInAdding: false,
    duplicateEntry: false
  }
);
