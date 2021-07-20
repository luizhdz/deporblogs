import { Button, Grid, TextField } from "@material-ui/core";
import React from "react";
import { loginSubmit } from "../../services/login";

export default function LoginComponent() {
  return (
    <div>      
      <form className="form-login" onSubmit={(event) => loginSubmit(event)}>
        <Grid container direction="column" spacing={4} >
          <Grid item>
            <h1>DeporBlogs</h1>  
          </Grid>
          <Grid item>
            <TextField
              variant="outlined"
              placeholder="Email"
              type="email"
              name="email"
              fullWidth
              required
            ></TextField>
          </Grid>
          <Grid item>
            <TextField
              variant="outlined"
              placeholder="Password"
              type="password"
              name="password"
              fullWidth
              required
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              className="btn btn-success"
              fullWidth
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
