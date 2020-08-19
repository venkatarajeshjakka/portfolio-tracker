import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import {
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton
} from "@material-ui/core";
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  HomeRounded as HomeRoundedIcon,
  AttachMoneyRounded as AttachMoneyRoundedIcon,
  BookmarkRounded as BookmarkRoundedIcon
} from "@material-ui/icons";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const iconsArray = [
  {
    text: "DashBoard",
    icon: <HomeRoundedIcon />,
    to: "/dashboard"
  },
  {
    text: "Dividend",
    icon: <AttachMoneyRoundedIcon />,
    to: "/dividend"
  },
  {
    text: "Watchlist",
    icon: <BookmarkRoundedIcon />,
    to: "/watchlist"
  }
];
const styles = theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  }
});

const SideBar = ({ open, classes, handleDrawerClose }) => {
  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
          {classes.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <List>
        {iconsArray.map((item, index) => (
          <ListItem button key={item.text} component={Link} to={item.to}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};
export default withStyles(styles)(SideBar);
