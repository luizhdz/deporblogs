import React from "react";
import { useStyles } from "./styles";
import NavBarComponent from "./menuList";
import { BrowserRouter as Router } from "react-router-dom";
import MainContent from "./mainContent";

export default function MainLayout() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Router>
        <NavBarComponent />
        <MainContent />
      </Router>
    </div>
  );
}
