import createDataContext from "./createDataContext";


const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };

    case "signin":
      return { errorMessage: "", token: action.payload };

    case "clear_error_message":
      return { ...state, errorMessage: "" };
    case "signout":
      return { token: null, errorMessage: "" };
    default:
      return state;
  }
};

const tryLocalSignin = dispatch => async () => {
  
    dispatch({ type: "signin", payload: '' });
   
};

const clearErrorMessage = dispatch => () => {
  dispatch({ type: "clear_error_message" });
};
const signup = dispatch => async ({ email, password }) => {
  try {
   

   

    dispatch({ type: "signin", payload: '' });
   
  } catch (error) {
    dispatch({
      type: "add_error",
      payload: "Something went wrong with sign up"
    });
  }
};

const signin = dispatch => async ({ email, password }) => {
  try {
    

    dispatch({ type: "signin", payload: '' });
   
  } catch (error) {
    dispatch({
      type: "add_error",
      payload: "Something went wrong with sign in"
    });
  }
};

const signout = dispatch => async () => {
  //sign out
 
  dispatch({ type: "signout" });
  
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup, clearErrorMessage, tryLocalSignin },
  { token: null, errorMessage: "" }
);