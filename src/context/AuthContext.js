import createDataContext from "./createDataContext";
import firebase from "../config/firebase";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };

    case "signin":
      return { errorMessage: "", signInSuccess: action.payload };

    case "clear_error_message":
      return { ...state, errorMessage: "" };
    case "signout":
      return { signInSuccess: false, errorMessage: "" };

    case "userName":
      return { ...state, userName: action.payload };
    default:
      return state;
  }
};

const tryLocalSignin = dispatch => async () => {
  dispatch({ type: "signin", payload: "" });
};

const clearErrorMessage = dispatch => () => {
  dispatch({ type: "clear_error_message" });
};
const signup = dispatch => async ({ name, email, password }) => {
  try {
    await firebase.register(name, email, password);

    dispatch({ type: "signin", payload: true });
  } catch (error) {
    dispatch({
      type: "add_error",
      payload: error.message
    });
  }
};

const signin = dispatch => async ({ email, password }) => {
  try {
    console.log("method fired");
    var response = await firebase.login(email, password);
    console.log(response);
    dispatch({ type: "signin", payload: true });
  } catch (error) {
    dispatch({
      type: "add_error",
      payload: error.message
    });
  }
};

const signout = dispatch => async () => {
  //sign out
  await firebase.logout();
  dispatch({ type: "signout" });
};

const getUserName = dispatch => async () => {
  //sign out
  var response = await firebase.getCurrentUsername();
  dispatch({ type: "userName", payload: response });
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup, clearErrorMessage, tryLocalSignin, getUserName },
  { signInSuccess: false, errorMessage: "", userName: "" }
);
