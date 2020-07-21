import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  listItem: {
    padding: theme.spacing(1, 0)
  },
  total: {
    fontWeight: 700
  },
  title: {
    marginTop: theme.spacing(2)
  }
}));

function mapStateToProps(state) {
  return {
    items: state.MyCart
  };
}

function Review(props) {
  const classes = useStyles();
  const userData = JSON.parse(localStorage.getItem('userData'))

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {Object.entries(props.items).map(product => (
          <ListItem className={classes.listItem} key={product[1].name}>
            <ListItemText primary={product[1].name} secondary={product[1].count} />
            <Typography variant="body2">{product[1].price}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            ${Object.entries(props.items).reduce(
            (acc, currentItem) => currentItem[1].price* currentItem[1].count + acc,
            0
          )}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Shipping
          </Typography>
          <Typography gutterBottom>{userData.name}</Typography>
          <Typography gutterBottom>{userData.billingAddress}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Payment details
          </Typography>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Cash On Delivery
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
export default connect(mapStateToProps)(Review);
