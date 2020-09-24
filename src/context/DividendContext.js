import createDataContext from "./createDataContext";
import app from "../config/firebase";

const dividendReducer = (state, action) => {
  switch (action.type) {
    case "add_dividend":
      return {
        ...state,
        dividendArray: [...state.dividendArray, action.payload]
      };
    case "get_dividend":
      return { ...state, dividendArrayService: action.payload };

    case "delete_dividend":
      return {
        ...state,
        dividendArray: [],
        dividendArrayService: state.dividendArrayService.filter(
          item => item.id !== action.payload
        )
      };
    default:
      return state;
  }
};

const deleteEntry = dispatch => async documentId => {
  const db = app.firestore();
  await db
    .collection("dividends")
    .doc(documentId)
    .delete();
  dispatch({
    type: "delete_dividend",
    payload: documentId
  });
};

const addDividendHistory = dispatch => async (
  stockName,
  amount,
  date,
  authorId
) => {
  const db = app.firestore();
  await db.collection("dividends").add({
    stockName,
    date,
    amount,
    authorId
  });
  dispatch({
    type: "add_dividend",
    payload: { stockName, date, amount, authorId }
  });
};

const getDividendHistory = dispatch => async authorId => {
  console.log("action fired");

  try {
    var collection = [];
    const db = app.firestore();
    await db
      .collection("dividends")
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
          type: "get_dividend",
          payload: collection
        });
      });
  } catch (error) {}
};
export const { Provider, Context } = createDataContext(
  dividendReducer,
  { addDividendHistory, getDividendHistory, deleteEntry },
  {
    dividendArray: [],
    dividendArrayService: [],
    errorInFetching: false,
    errorInAdding: false
  }
);
