import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Grid, makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { getById, submitBlog } from "../../services/blog";
import { useParams } from "react-router-dom";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { api } from "../../../functions/api";

const useStyles = makeStyles((theme)=>({
  label:{
    marginLeft: theme.spacing(1.5)
  }
}))

export default function BlogView() {
  const classes = useStyles()
  const [blog, setBlog] = useState({
    _id: null,
    title: "",
    autor: "",
    content: "",
  });
  const [categories, setCategories] = useState([])

  const { id: blogId } = useParams();

  useEffect(() => {
    console.log("Change ID: ", blogId)
    if (blogId) {
      getById(blogId).then((response) => setBlog(response));
    }else{
      setBlog({
        _id: null,
        title: "",
        autor: "",
        content: "",
      })
    }
  }, [blogId]);

  useEffect(()=>{
    getCategories()
  },[])

  useEffect(()=>{ console.log("Change Blog: ", blog) },[blog])

  const getCategories = () =>{
    api({endpoint: 'categories'}).then(response => {
      setCategories(response)
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog({ ...blog, [name]: value });
  };

  return (
    <div>
      <h1>Nuevo Blog</h1>
      <form onSubmit={(e) => submitBlog(e)}>
        {blog._id && (
          <input
            style={{ display: "none" }}
            name="id"
            defaultValue={blog._id}
          ></input>
        )}
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
            <FormControl fullWidth  >
              <InputLabel id="category-selected-label" className={classes.label} >Categoria *</InputLabel>
              <Select
                value={blog.category || ""}
                variant="outlined"
                id="category-selected"
                labelId="category-selected-label"
                required
                name="category"
                onChange={e => handleChange(e)}
              >
                {categories.map(category =>{
                  return <MenuItem key={`option-category-${category._id}`} value={category.name}>{category.name}</MenuItem>
                })}
              </Select>
            </FormControl>
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
