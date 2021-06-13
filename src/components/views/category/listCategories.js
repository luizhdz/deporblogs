import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

export default function ListCategories({
  categories = [],
  deleteCategory,
  editCategory,
  selected
}) {
  return (
    <Grid container>
      <Grid item xs={12}>
        <List>
          {categories.map((category) => {
            return (
              <ListItemComponent
                key={category._id}
                name={category.name}
                id={category._id}
                selected={selected}
                deleteCategory={deleteCategory}
                editCategory={editCategory}
              />
            );
          })}
        </List>
      </Grid>
    </Grid>
  );
}

const ListItemComponent = ({ name, id, selected, deleteCategory, editCategory }) => {
  return (
    <ListItem selected={id === selected} >
      <ListItemText primary={name} />

      <ListItemSecondaryAction>
        <Grid container spacing={2}>
          <Grid item>
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={(e) => editCategory(id)}
            >
              <EditIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={(e) => deleteCategory(id)}
            >
              <DeleteIcon />
            </IconButton>
          </Grid>
        </Grid>
      </ListItemSecondaryAction>
    </ListItem>
  );
};
