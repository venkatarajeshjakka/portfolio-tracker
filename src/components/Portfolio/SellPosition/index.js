import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import DisplayItemSection from '../DisplayItemSection'
import SellPositionForm from '../SellPositionForm'
const styles = theme => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
    margin: theme.spacing(7)
  },
  item: {
    padding: theme.spacing(1),
    width: "100%",
    borderBottom: "1px solid",
    borderBottomColor: "#dde0e4",
    display: "block",
    position: "relative",
    tansition: "all 0.3s",
    borderRadius: theme.spacing(1),
    "&:hover": {
      borderRadius: theme.spacing(1),
      border: "1px solid #008080"
    }
  },
  flex_space_between: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(2),
  }
});
const SellPosition = ({ classes }) => {
 
  return (
    <main style={{ backgroundColor : 'white'}}>
      <div className={classes.container}>
        <div>
          <div className={classes.item}>
            <div className={classes.flex_space_between}>
              <DisplayItemSection 
              label={'item1'}
              value={'value1'}
              />
              <DisplayItemSection 
              label={'item1'}
              value={'value1'}
              />
              <DisplayItemSection 
              label={'item1'}
              value={'value1'}
              />
            </div>
          </div>
        </div>

        <div>
          
        </div>
      </div>
    </main>
  );
};

export default withRouter(withStyles(styles)(SellPosition));
