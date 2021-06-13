import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  title: {
    marginBottom: theme.spacing(1),
  },
  pos: {
    fontSize: 12,
  },
  divider: {
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1),
  },
}));

export default function CardBlog({ data, handleDelete }) {
  const classes = useStyles();

  const history = useHistory();

  function handleClick(path) {
    history.push(path);
  }

  

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title}>{data.title} <Typography component={"span"} variant="caption" color="textSecondary" >({data.category}) </Typography> </Typography>

        <Typography className={classes.pos} color="textSecondary">
          {data.autor}
        </Typography>
        <Divider className={classes.divider} />
        <Typography variant="body2" component="p">
          {data.content}
        </Typography>
      </CardContent>

      <CardActions>
        <Grid container justify="space-between">
          <Grid item>
            <Button
              color="primary"
              size="small"
              onClick={(e) => handleClick(`blog/${data._id}`)}
            >
              Editar
            </Button>
          </Grid>
          <Grid item>
            <Button
              color="secondary"
              size="small"
              onClick={(e) => handleDelete(e, data._id)}
            >
              Eliminar
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}
