import React, { useState, useContext, useEffect } from "react";
import {
  Container,
  Dialog,
  DialogContent,
  DialogContentText,
  Grid,
  CircularProgress
} from "@material-ui/core";
import DividendForm from "./DividendForm";
import PageHeader from "../shared/PageHeader";
import {
  AttachMoneyRounded as AttachMoneyRoundedIcon,
  AddOutlined as AddOutlinedIcon
} from "@material-ui/icons";
import { Button } from "../Controls";
import DialogTitle from "../Dialog/DialogTitle";
import AlertDialog from "../Dialog/AlertDialog";
import { withStyles } from "@material-ui/core/styles";
import { Context as DividendContext } from "../../context/DividendContext";
import { AuthContext } from "../../context/AuthContext";
import Budget from "./Budget";
import DividendHistoryTable from "./DividendHistoryTable";
import moment from "moment";
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

  const formatDividendData = data => {
    var formattedData = data.map(item => {
      return {
        id: item.id,
        stockName: item.data.stockName,
        amount: item.data.amount,
        date: moment(new Date(item.data.date.seconds * 1000)).format("ll")
      };
    });
    return formattedData;
  };
  console.log(dividendArrayService);
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
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <Budget />
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
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title" onClose={handleClose}>
          Subscribe
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <DividendForm onClose={handleClose} documentId={documentId} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default withStyles(styles)(Dividend);
