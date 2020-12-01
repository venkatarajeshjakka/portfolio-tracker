import React, { useState, useContext, useEffect } from "react";
import { Container, Grid, CircularProgress } from "@material-ui/core";
import DividendForm from "./DividendForm";
import PageHeader from "../shared/PageHeader";
import {
  AttachMoneyRounded as AttachMoneyRoundedIcon,
  AddOutlined as AddOutlinedIcon
} from "@material-ui/icons";
import { Button } from "../Controls";
import { AlertDialog, FormDialog } from "../Dialog";
import { withStyles } from "@material-ui/core/styles";
import { Context as DividendContext } from "../../context/DividendContext";
import { AuthContext } from "../../context/AuthContext";
import Budget from "./Budget";
import DividendHistoryTable from "./DividendHistoryTable";
import {
  formatDividendData,
  dividendInformation
} from "../../mappers/DividendDataFormatter";

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

const DisplaySummary = ({ data }) => {
  var response = dividendInformation(data);
  var {
    totalAmount,
    currentYearAmount,
    yearlyChangePercentage,
    currentYearQuarterlyAmount,
    quarterlyChangePercentage
  } = response;
  return (
    <Grid container alignItems="center" spacing={3}>
      <Grid item xs={4}>
        <Budget
          amount={totalAmount}
          label={"Total Amount"}
          changeLabel={"As of Today"}
        />
      </Grid>
      <Grid item xs={4}>
        <Budget
          amount={currentYearAmount}
          label={"Yearly Amount"}
          change={yearlyChangePercentage}
          changeLabel={"Since Previuos Year"}
        />
      </Grid>
      <Grid item xs={4}>
        <Budget
          amount={currentYearQuarterlyAmount}
          label={"Quarterly Amount"}
          change={quarterlyChangePercentage}
          changeLabel={"Since Previuos Quarter"}
        />
      </Grid>
    </Grid>
  );
};
const Dividend = ({ classes }) => {
  const {
    getDividendHistory,
    deleteEntry,
    state: { dividendArray, dividendArrayService }
  } = useContext(DividendContext);

  const { currentUser } = useContext(AuthContext);
  const currentUserId = currentUser.uid;

  useEffect(() => {
    getDividendHistory(currentUserId);
  }, [currentUserId, dividendArray]);

  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);

  const [documentId, setDocumentId] = useState("");

  const handleClickAlertOpen = () => {
    setOpenAlert(true);
  };

  const handleAlertClose = () => {
    setDocumentId("");
    setOpenAlert(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setDocumentId("");
    setOpen(false);
  };

  const handleDelete = documentId => {
    setDocumentId(documentId);
    handleClickAlertOpen();
  };
  const handleEdit = documentId => {
    setDocumentId(documentId);
    setOpen(true);
  };

  return (
    <div className={classes.root}>
      <Container>
        <PageHeader
          title="Dividend"
          subTitle="Earning from investment"
          icon={<AttachMoneyRoundedIcon fontSize="large" />}
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
            onClick={handleClickOpen}
            text={"Add"}
            startIcon={<AddOutlinedIcon />}
          />
        </Grid>
        {dividendArrayService && dividendArrayService.length > 0 ? (
          <DisplaySummary data={dividendArrayService} />
        ) : (
          <CircularProgress />
        )}
        <Grid container spacing={3}>
          <Grid item lg={9} md={12} xl={9} xs={12}>
            {dividendArrayService && dividendArrayService.length > 0 ? (
              <DividendHistoryTable
                data={formatDividendData(dividendArrayService)}
                onDelete={handleDelete}
                onEdit={handleEdit}
              />
            ) : (
              <CircularProgress />
            )}
          </Grid>
        </Grid>
      </Container>
      <AlertDialog
        onAgree={() => {
          deleteEntry(documentId);
          handleAlertClose();
        }}
        open={openAlert}
        handleClose={handleAlertClose}
      />

      <FormDialog open={open} onClose={handleClose}>
        <DividendForm onClose={handleClose} documentId={documentId} />
      </FormDialog>
    </div>
  );
};

export default withStyles(styles)(Dividend);
