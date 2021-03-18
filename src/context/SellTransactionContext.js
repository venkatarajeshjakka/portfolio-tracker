import createDataContext from "./createDataContext";

const SellTransactionReducer = (state, action) => {
  switch (action.type) {
    case "add_sell_position":
      return { ...state, position: action.payload };

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
    clearSellPostion
  },
  {
    position: null
  }
);
