import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { getById, submitBlog } from "../../services/blog";
import { useParams } from "react-router-dom";

export default function BlogView() {
  const [blog, setBlog] = useState({
    _id: null,
    title: "",
    autor: "",
    content: "",
  });

  const { id: blogId } = useParams();

  useEffect(() => {
    if (blogId) {
      getById(blogId).then((response) => setBlog(response));
    }
  }, [blogId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog({ ...blog, [name]: value });
  };

  return (
    <div>
      <h1>Nuevo Blog</h1>
      <form onSubmit={(e) => submitBlog(e)}>
        {blog._id && <input style={{ display: "none" }} name="id" defaultValue={blog._id} ></input>}
        <Grid container direction="column" spacing={3}>
          <Grid item>
            <TextField
              onChange={(e) => handleChange(e)}
              required
              label="Titulo"
              placeholder="Escribe un titulo..."
              name="title"
              variant="outlined"
              size="medium"
              fullWidth
              value={blog.title}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item>
            <TextField
              onChange={(e) => handleChange(e)}
              required
              label="Autor"
              placeholder="Escribe un autor..."
              name="autor"
              variant="outlined"
              size="medium"
              fullWidth
              value={blog.autor}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item>
            <TextField
              onChange={(e) => handleChange(e)}
              required
              label="Contenido"
              placeholder="Escribe el contenido del blog..."
              name="content"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              value={blog.content}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item container justify="flex-end">
            <Button type="submit" color="primary" variant="contained">
              Guardar
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
