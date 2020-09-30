import React from "react";
import { Container, Grid } from "@material-ui/core";
import PageHeader from "../shared/PageHeader";
import { withStyles } from "@material-ui/core/styles";
import {
  AddOutlined as AddOutlinedIcon,
  BookmarkRounded as BookmarkRoundedIcon
} from "@material-ui/icons";
import { Button } from "../Controls";

const styles = theme => ({
  button: {
    margin: theme.spacing(5),
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
});

const Watchlist = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Container>
        <PageHeader
          title="Watchlist"
          subTitle="Add Stocks to watch"
          icon={<BookmarkRoundedIcon fontSize="large" />}
        />
        <Grid
          container
          spacing={3}
          direction="row"
          justify="flex-end"
          alignItems="center"
          className={classes.Button}
        >
          <Button
            variant="outlined"
            color="primary"
            onClick={() => {}}
            text={"Add"}
            startIcon={<AddOutlinedIcon />}
          />
        </Grid>
      </Container>
    </div>
  );
};

export default withStyles(styles)(Watchlist);
