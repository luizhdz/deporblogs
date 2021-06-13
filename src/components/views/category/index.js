import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";

import Divider from "@material-ui/core/Divider";
import { useStyles } from "./styles";
import ListCategories from "./listCategories";
import FormCategory from "./FormCategory";
import { api } from "../../../functions/api";

export default function CategoryView() {
  const classes = useStyles();
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState({name: ""});

  useEffect(() => {
    loadCategories();
    return () => {
      setCategories([]);
    };
  }, []);

  function loadCategories() {
    const endpoint = "categories";
    api({ endpoint }).then((response) => {
      setCategories(response);
    });
  }

  function deleteCategory(id) {
    const endpoint = `categories/${id}`;
    const method = "DELETE";
    api({ endpoint, method }).then((response) => {
      loadCategories();
    });
  }

  function editCategory(id) {
    const endpoint = `categories/${id}`
    api({endpoint}).then(response => {
      setCategory(response)
    })
  }

  return (
    <div>
      <h1>Categorias</h1>
      <Grid container justify="center">
        <Grid item xs={8}>
          <FormCategory category={category} clean={e => setCategory({name: ""})} loadCategories={loadCategories} />
        </Grid>
        <Grid item xs={8}>
          <Divider className={classes.divider} />
        </Grid>
        <Grid item xs={8}>
          <ListCategories
            categories={categories}
            deleteCategory={deleteCategory}
            editCategory={editCategory}
            selected={category._id}
          />
        </Grid>
      </Grid>
    </div>
  );
}
