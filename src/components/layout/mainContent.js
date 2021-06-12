import React from "react";
import { Grid, Paper } from "@material-ui/core";
import Routing from "./routing";
import { useStyles } from "./styles";
export default function MainContent() {
  const classes = useStyles();
  return (
    <Grid container justify="center">
      <Grid item xs={8}>
        <Paper elevation={3} className={classes.paper}>
          <Routing />
        </Paper>
      </Grid>
    </Grid>
  );
}
