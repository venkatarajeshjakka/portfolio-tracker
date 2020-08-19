import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import {
  Typography,
  Grid,
  Container,
  Paper
} from "@material-ui/core";


const styles = theme => ({
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
      },
});
const Dividend = ({ classes }) => {
  return (
    <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
            <Grid item xs={12} md={8} lg={9} >
                <Paper>
                    <Typography component="h5" >
                        Hello
                    </Typography>
                </Paper>
            </Grid>

        </Grid>
    </Container>
    
  );
};

export default withStyles(styles)(Dividend);
