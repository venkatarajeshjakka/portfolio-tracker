import React, { useState, useContext } from "react";
import clsx from "clsx";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SideBar from "./sideBar";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import app from "../../config/firebase";
import { withStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const LogOutButton = ({ handleSigout }) => {
  return (
    <Button color="inherit" onClick={handleSigout}>
      Logout
    </Button>
  );
};

const LoginButton = () => {
  return (
    <Button color="inherit" component={Link} to="/login">
      Login
    </Button>
  );
};

const styles = theme => ({
  root: {
    display: "flex"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  hide: {
    display: "none"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
});

const Layout = ({ classes, children }) => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  function handleSigout() {
    app.auth().signOut();
  }
  const { currentUser } = useContext(AuthContext);

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={
              currentUser
                ? clsx(classes.menuButton, open && classes.hide)
                : classes.hide
            }
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Portfolio Tracker
          </Typography>
          {currentUser ? (
            <LogOutButton handleSigout={handleSigout} />
          ) : (
            <LoginButton />
          )}
        </Toolbar>
      </AppBar>
      <SideBar open={open} handleDrawerClose={handleDrawerClose} />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />
        {children}
      </main>
    </div>
  );
};

export default withStyles(styles)(Layout);
