import React ,{useState, useEffect}from "react";
import "./styles.css";
import HomePage from "../HomePage";
import Login from "../Login";
import Register from "../Register";
import Dashboard from "../Dashboard";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { CssBaseline ,CircularProgress} from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider as AuthProvider } from "../../context/AuthContext";
import firebase from '../../config/firebase'
const theme = createMuiTheme();

const App = () => {
  const [firebaseInitialized, setFirebaseInitialized] = useState(false)
  useEffect(() => {
		firebase.isInitialized().then(val => {
			setFirebaseInitialized(val)
		})
  })
  console.log("firebaseIntitialize:", setFirebaseInitialized)
  return firebaseInitialized !== false ?(
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </MuiThemeProvider>
  ) : <div id="loader"><CircularProgress /></div>;
};

export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};
