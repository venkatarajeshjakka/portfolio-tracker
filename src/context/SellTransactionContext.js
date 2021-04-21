import createDataContext from "./createDataContext";

const SellTransactionReducer = (state, action) => {
  switch (action.type) {
    case "add_sell_position":
      return { ...state, position: action.payload };
    case "add_transaction":
      return { ...state, transactionItem: action.payload };
    case "clear_transaction":
      return { ...state, transactionItem: null };
    case "clear_sell_position":
      return { ...state, position: null };
  }
};

const addSellPosition = dispatch => data => {
  dispatch({
    type: "add_sell_position",
    payload: data
  });
};
const addTransaction = dispatch => data => {
  dispatch({
    type: "add_transaction",
    payload: data
  });
};
const clearTransaction = dispatch => data => {
  dispatch({
    type: "clear_transaction",
    payload: null
  });
};
const clearSellPostion = dispatch => data => {
  dispatch({
    type: "clear_sell_position",
    payload: null
  });
};
export const { Provider, Context } = createDataContext(
  SellTransactionReducer,
  {
    addSellPosition,
    clearSellPostion,
    addTransaction,
    clearTransaction
  },
  {
    position: null,
    transactionItem : null
  }
);
