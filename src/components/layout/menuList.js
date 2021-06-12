import React from "react";
import { useStyles } from "./styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

export default function NavBarComponent() {
  const classes = useStyles();

  const history = useHistory();

  function handleClick(path) {
    history.push(path);
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          className={classes.title}
          onClick={(e) => handleClick("/")}
        >
          DeporBlogs
        </Typography>

        <Button color="inherit" onClick={(e) => handleClick("/blog")}>
          Nuevo blog
        </Button>
      </Toolbar>
    </AppBar>
  );
}
