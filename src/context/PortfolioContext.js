import createDataContext from "./createDataContext";
import app from "../config/firebase";
import _ from "underscore";
import { stockList as staticData } from "../data/stockList";
import { formattData, stockList } from "../mappers/PositionDataFormatter";

const portfolioReducer = (state, action) => {
  switch (action.type) {
    case "add_position":
      return {
        ...state,
        portfolioArray: [...state.portfolioArray, action.payload]
      };
    case "get_positionList":
      return { ...state, portfolioArrayService: action.payload };

    case "formatted_position":
      return { ...state, formattedResponse: action.payload };

    case "position_keys":
      return { ...state, positionsKeys: action.payload };

    case "add_position_Id":
      return { ...state, positionId: action.payload };

    case "clear_position_Id":
      return { ...state, positionId: null };

    case "delete_position":
      return {
        ...state,
        portfolioArray: [],
        portfolioArrayService: state.portfolioArrayService.filter(
          item => item.id !== action.payload
        ),
        formattedResponse: state.formattedResponse.filter(
          item => item.id !== action.payload
        ),
        positionsKeys: []
      };

    case "edit_position":
      return {
        ...state,
        portfolioArray: [],
        portfolioArrayService: [],
        positionsKeys: []
      };

    case "edit_position_quantity":
      return {
        ...state,
        portfolioArray: [],
        portfolioArrayService: [],
        positionsKeys: []
      };

    case "add_closed_position":
      return {
        ...state,
        closedPoistionsArray: [...state.closedPoistionsArray, action.payload]
      };
    default:
      return state;
  }
};

const getStockCode = stockName => {
  var response = _.findWhere(staticData, { StockName: stockName });

  var stockCode = response.Symbol;

  return stockCode;
};

const addPositionId = dispatch => id => {
  dispatch({
    type: "add_position_Id",
    payload: id
  });
};

const clearPositionId = dispatch => () => {
  dispatch({
    type: "clear_position_Id",
    payload: null
  });
};

const updatePositionQuantity = dispatch => async (documentId, quantity) => {
  const db = app.firestore();

  await db
    .collection("openPositions")
    .doc(documentId)
    .update({
      quantity,
      modifiedDate: Date.now()
    });
  dispatch({
    type: "edit_position_quantity",
    payload: documentId
  });
};
const editPosition = dispatch => async (documentId, data) => {
  const {
    buyPrice,
    targetPrice,
    stopLoss,
    quantity,
    trailingStopLoss,
    date
  } = data;
  const db = app.firestore();

  await db
    .collection("openPositions")
    .doc(documentId)
    .update({
      buyPrice,
      targetPrice,
      stopLoss,
      quantity,
      trailingStopLoss,
      date,
      modifiedDate: Date.now()
    });
  dispatch({
    type: "edit_position",
    payload: documentId
  });
};
const deletePosition = dispatch => async id => {
  const db = app.firestore();
  await db
    .collection("openPositions")
    .doc(id)
    .delete();
  dispatch({
    type: "delete_position",
    payload: id
  });
};
const getPositionArray = dispatch => async authorId => {
  try {
    var collection = [];
    const db = app.firestore();
    await db
      .collection("openPositions")
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
          type: "get_positionList",
          payload: collection
        });

        dispatch({
          type: "formatted_position",
          payload: formattData(collection)
        });

        dispatch({
          type: "position_keys",
          payload: stockList(formattData(collection))
        });
      });
  } catch (error) {}
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

const addClosedPosition = dispatch => async (data, authorId) => {
  const db = app.firestore();

  await db.collection("closedPositions").add({
    stockName: data.stockName,
    stockCode: data.stockCode,
    buyPrice: data.buyPrice,
    sellPrice: data.sellPrice,
    sellDate: data.sellDate,
    quantity: data.quantity,
    buyDate: data.buyDate,
    authorId
  });
  dispatch({
    type: "add_closed_position",
    payload: {
      stockName: data.stockName,
      stockCode: data.stockCode,
      buyPrice: data.buyPrice,
      sellPrice: data.sellPrice,
      sellDate: data.sellDate,
      quantity: data.quantity,
      modifiedDate: Date.now(),
      buyDate: data.date,
      authorId
    }
  });
};

export const { Provider, Context } = createDataContext(
  portfolioReducer,
  {
    addPosition,
    getPositionArray,
    addPositionId,
    clearPositionId,
    deletePosition,
    editPosition,
    addClosedPosition,
    updatePositionQuantity
  },
  {
    portfolioArray: [],
    portfolioArrayService: [],
    formattedResponse: [],
    positionsKeys: [],
    errorInFetching: false,
    errorInAdding: false,
    duplicateEntry: false,
    positionId: null,
    closedPoistionsArray: []
  }
);
