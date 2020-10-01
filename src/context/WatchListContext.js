import createDataContext from "./createDataContext";
import app from "../config/firebase";

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

    case "edit_dividend":
      return {
        ...state,
        watchListArray: [],
        watchListArrayService: []
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

const addWatchList = dispatch => async (stockName, authorId) => {
  const db = app.firestore();

  await db.collection("watchLists").add({
    stockName,
    date: Date.now(),
    stockPrice: 120,
    authorId
  });
  dispatch({
    type: "add_watchList",
    payload: { stockName, date: Date.now(), stockPrice: 120, authorId }
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
  { addWatchList, getWatchListArray, deleteEntry },
  {
    watchListArray: [],
    watchListArrayService: [],
    errorInFetching: false,
    errorInAdding: false
  }
);
