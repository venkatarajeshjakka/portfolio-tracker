import React from "react";
import { Container, Grid,Box } from "@material-ui/core";
import PageHeader from "../shared/PageHeader";
import { withStyles } from "@material-ui/core/styles";
import { Link, withRouter } from "react-router-dom";
import {
  AddOutlined as AddOutlinedIcon,
  AccountBalanceOutlined as AccountBalanceOutlinedIcon
} from "@material-ui/icons";
import { Button } from "../Controls";
import StockCard from "./StockCard";
const products = [
  {
    
    createdAt: '27/03/2019',
    title: 'Dropbox',
    totalDownloads: '594'
  },
  {
    
    createdAt: '31/03/2019',
    title: 'Medium Corporation',
    totalDownloads: '625'
  },
  {
   
    createdAt: '03/04/2019',
    title: 'Slack',
    totalDownloads: '857'
  },
  {
    
    createdAt: '04/04/2019',
   title: 'Lyft',
    totalDownloads: '406'
  },
  {
   
    createdAt: '04/04/2019',
   title: 'GitHub',
    totalDownloads: '835'
  },
  {
   
    createdAt: '04/04/2019',
    title: 'Squarespace',
    totalDownloads: '835'
  }
];
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
  },
  productCard: {
    height: '100%'
  }
});

const Portfolio = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Container>
        <PageHeader
          title="Portfolio"
          subTitle="Add Stocks to wallet"
          icon={<AccountBalanceOutlinedIcon fontSize="large" />}
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
            component={Link}
            to="/add-position"
            text={"Add"}
            startIcon={<AddOutlinedIcon />}
          />
        </Grid>
        <Box mt={3}>
          <Grid
            container
            spacing={4}
          >
            {products.map((product) => (
              <Grid
                item
                key={product.title}
                lg={4}
                md={6}
                xs={12}
              >
                <StockCard
                  className={classes.productCard}
                  product={product}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default withRouter(withStyles(styles)(Portfolio));
