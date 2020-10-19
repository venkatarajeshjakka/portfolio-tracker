import React from "react";
import "./styles.css";
import Login from "../Login";
import Register from "../Register";
import Dashboard from "../Dashboard";
import Home from "../HomePage";
import Watchlist from "../Watchlist";
import Dividend from "../Dividend";
import Portfolio from "../Portfolio";
import Layout from "../shared/layout";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "../../context/AuthContext";
import { Provider as DividendProvider } from "../../context/DividendContext";
import { Provider as WatchListProvider } from "../../context/WatchListContext";
import { Provider as StockProvider } from "../../context/StockContext";
import PrivatRoute from "../../config/PrivateRoute";
const theme = createMuiTheme();

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <PrivatRoute exact path="/dashboard" component={Dashboard} />
            <PrivatRoute exact path="/dividend" component={Dividend} />
            <PrivatRoute exact path="/watchlist" component={Watchlist} />
            <PrivatRoute exact path="/portfolio" component={Portfolio} />
          </Switch>
        </Layout>
      </Router>
    </MuiThemeProvider>
  );
};

export default () => {
  return (
    <AuthProvider>
      <WatchListProvider>
        <StockProvider>
          <DividendProvider>
            <App />
          </DividendProvider>
        </StockProvider>
      </WatchListProvider>
    </AuthProvider>
  );
};
