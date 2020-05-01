// React import
import React from "react";
import { Link } from "react-router-dom";

// Material UI import
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

// My components
import HomeSummary from "./HomeSummary";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    flexWrap: "wrap"
  },
  fab: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

const HomeList = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <HomeSummary />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <HomeSummary />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <HomeSummary />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <HomeSummary />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <HomeSummary />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <HomeSummary />
        </Grid>
      </Grid>
      <Fab
        color="primary"
        aria-label="add"
        className={classes.fab}
        component={Link}
        to="/homes/new"
      >
        <AddIcon />
      </Fab>
    </div>
  );
};

export default HomeList;
