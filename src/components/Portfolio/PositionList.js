import React, { useState } from "react";

import { v4 as uuid } from "uuid";
import moment from "moment";
import {
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Box,
  Grid,
  Typography
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const DisplaySection = ({ label, value }) => {
  return (
    <Grid container direction="column" justify="center">
      <Grid item>
        <Typography color="textSecondary" display="inline" variant="body2">
          {label}
        </Typography>
      </Grid>
      <Grid item>
        <Typography color="textPrimary" display="inline" variant="subtitle1">
          {value}
        </Typography>
      </Grid>
    </Grid>
  );
};
const data = [
  {
    id: uuid(),
    name: "Dropbox",
    imageUrl: "/static/images/products/product_1.png",
    updatedAt: moment().subtract(2, "hours")
  },
  {
    id: uuid(),
    name: "Medium Corporation",
    imageUrl: "/static/images/products/product_2.png",
    updatedAt: moment().subtract(2, "hours")
  },
  {
    id: uuid(),
    name: "Slack",
    imageUrl: "/static/images/products/product_3.png",
    updatedAt: moment().subtract(3, "hours")
  },
  {
    id: uuid(),
    name: "Lyft",
    imageUrl: "/static/images/products/product_4.png",
    updatedAt: moment().subtract(5, "hours")
  },
  {
    id: uuid(),
    name: "GitHub",
    imageUrl: "/static/images/products/product_5.png",
    updatedAt: moment().subtract(9, "hours")
  }
];

const useStyles = makeStyles({
  root: {
    height: "100%"
  }
});
const PositionList = ({ className, ...rest }) => {
  const classes = useStyles();
  const [products] = useState(data);
  return (
    <List>
      {products.map((product, i) => (
        <ListItem divider={i < products.length - 1} key={product.id}>
          <Grid container direction="column">
            <Grid item>
              <Grid container direction="row" justify="space-between">
                <Grid item>
                  <ListItemText
                    primary={product.name}
                    secondary={`Updated ${product.updatedAt.fromNow()}`}
                  />
                </Grid>
                <Grid item>
                  <IconButton edge="end" size="small">
                    <MoreVertIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Box flexGrow={1}>
                <Grid container justify="space-between" spacing={3}>
                  <Grid item>
                    <DisplaySection label={"Buy Price"} value={3000} />
                    <DisplaySection label={"Investment Value"} value={3000} />
                  </Grid>
                  <Grid item>
                    <DisplaySection label={"Stop loss"} value={3000} />
                    <DisplaySection label={"Current Value"} value={3000} />
                  </Grid>
                  <Grid item>
                    <DisplaySection
                      label={"Trailing Stop loss"}
                      value={3000}
                    />
                    <DisplaySection
                      label={"Daily Gain / Loss"}
                      value={3000}
                    />
                  </Grid>
                  <Grid item>
                    <DisplaySection label={"Quanity"} value={3000} />
                    <DisplaySection
                      label={"Return"}
                      value={3000}
                    />
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </ListItem>
      ))}
    </List>
  );
};

export default PositionList;
