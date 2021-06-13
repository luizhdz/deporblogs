import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import formJson from "form-json";
import { api } from "../../../functions/api";
export default function FormCategory({ category, clean, loadCategories }) {
  function submitCategory(e) {
    e.preventDefault();
    const form = e.target;
    const payload = formJson(form);

    const endpoint = payload.id ? `categories/${payload.id}` : "categories";
    const method = payload.id ? "PUT" : "POST";

    api({ payload, method, endpoint }).then((response) => {
      alert("Categoria guardada");
      loadCategories();
      form.reset();
      clean()
    });
  }

  useEffect(() => {
    if (category._id) {
      document.querySelector("form input[name='name']").value = category.name;
    }
  }, [category]);

  return (
    <form onSubmit={(e) => submitCategory(e)}>
      {category._id && (
        <input
          style={{ display: "none" }}
          name="id"
          defaultValue={category._id}
        ></input>
      )}
      <Grid container alignItems="center" spacing={2}>
        <Grid item xs={10}>
          <TextField
            required
            label="Categoria"
            placeholder="Escribe una categoria"
            name="name"
            rows={4}
            variant="outlined"
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item container justify="flex-end" xs={2}>
          <Button type="submit" variant="contained" color="primary">
            Guardar
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
