import createDataContext from "./createDataContext";
import Stock from "../api/Stock";

const stockReducer = (state, action) => {
  switch (action.type) {
    case "watchlist_stock_data":
      return { ...state, watchListStockData: action.payload };
    case "stock_data":
      return { ...state, stockData: action.payload };
    default:
      return state;
  }
};

const getStockInfo = dispatch => async stockCodeArray => {
  const pArray = stockCodeArray.map(async stockCode => {
    stockCode = stockCode + ".NS";
    const baseUrl = `/get-nse-stocks?stockCode=${stockCode}`;
    var response = await Stock.get(baseUrl);
    return response.data;
  });
  const stockArray = await Promise.all(pArray);
  dispatch({ type: "watchlist_stock_data", payload: stockArray });
};

const getStockData = dispatch => async stockCode => {
  stockCode = stockCode + ".NS";
  const baseUrl = `/get-nse-stocks?stockCode=${stockCode}`;
  try {
    var response = await Stock.get(baseUrl);
    var stockResponse = response.data[stockCode];
    dispatch({ type: "stock_data", payload: stockResponse });
  } catch (err) {}
};
export const { Provider, Context } = createDataContext(
  stockReducer,
  { getStockInfo, getStockData },
  {
    watchListStockData: null,
    stockData: null
  }
);
