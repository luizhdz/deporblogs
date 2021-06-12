import React from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router-dom";

import HomeView from "../views/home";
import BlogView from "../views/blog";

import NotFound from "../views/notFound";

class Routing extends React.Component {
  render() {
    return (
        <Switch>
          <Route path={'/'} exact component={HomeView} />
          <Route path={'/blog'} exact component={BlogView} />          
          <Route path={'/blog/:id'} exact component={BlogView} />          
          <Route path="*" component={NotFound} />
        </Switch>
    );
  }
}
export default withRouter(Routing);
