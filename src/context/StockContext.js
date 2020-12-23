import createDataContext from "./createDataContext";
import Stock from "../api/Stock";

const stockReducer = (state, action) => {
  switch (action.type) {
    case "watchlist_stock_data":
      return { ...state, watchListStockData: action.payload };
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
export const { Provider, Context } = createDataContext(
  stockReducer,
  { getStockInfo },
  {
    watchListStockData: null
  }
);
