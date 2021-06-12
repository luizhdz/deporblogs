import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { deleteblogs, getAllBlogs } from "../../../services/home";
import CardBlog from "./card";

export default function CardBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    loadBlogs();
    return () => {
      setBlogs([]);
    };
  }, []);

  const loadBlogs = () => getAllBlogs().then((response) => setBlogs(response));

  function handleDelete(e, id) {
    e.preventDefault();
    // eslint-disable-next-line no-restricted-globals
    let deleted = confirm("Seguro que deseas eliminar este Blog ?");
    if (deleted) {
      deleteblogs(id).then((response) => {
        alert("Blog Eliminado");
        loadBlogs();
      });
    }
  }

  return (
    <Grid container spacing={1}>
      {blogs.map((blog) => (
        <Grid item xs={4} key={blog._id}>
          <CardBlog data={blog} handleDelete={handleDelete} />
        </Grid>
      ))}
    </Grid>
  );
}
