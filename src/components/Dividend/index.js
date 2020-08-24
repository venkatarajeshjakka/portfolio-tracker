import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { Paper } from "@material-ui/core";
import DividendForm from "./DividendForm";
import PageHeader from "../shared/PageHeader";
import { AttachMoneyRounded as AttachMoneyRoundedIcon } from "@material-ui/icons";
const styles = theme => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3)
  }
});
const Dividend = ({ classes }) => {
  return (
    <>
      <PageHeader
        title="Dividend"
        subTitle="Earning from investment"
        icon={<AttachMoneyRoundedIcon fontSize="large" />}
      />
      <DividendForm />
      <Paper className="classes.pageContent"></Paper>
    </>
  );
};

export default withStyles(styles)(Dividend);
