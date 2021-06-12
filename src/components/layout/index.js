import React from 'react'
import { Grid, Paper } from '@material-ui/core'
import { useStyles } from './styles';
import MenuList from './menuList';
import { BrowserRouter as Router } from "react-router-dom";
import Routing from './routing';

export default function MainLayout(){  
  const classes = useStyles();
  
  return (
    <Paper className={classes.paper}>
      <Router>
        <Grid container spacing={2}>
          <Grid item xs={4} sm={3} md={2}>          
            <MenuList />
          </Grid>
          <Grid item xs={8} sm={9} md={10}>
            <Paper className={classes.padding2}>
              <Routing />
            </Paper>
          </Grid>
        </Grid>
      </Router>          
    </Paper>
  )
  
}
