import React from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router-dom";

import HomeView from "../views/home";
import BlogView from "../views/blog";

import MainContent from "./mainContent";
import NotFound from "../views/notFound";

class Routing extends React.Component {
  render() {
    return (
      <MainContent>
        <Switch>
          <Route path={'/'} exact component={HomeView} />
          <Route path={'/blog'} exact component={BlogView} />          
          <Route path="*" component={NotFound} />
        </Switch>
      </MainContent>
    );
  }
}
export default withRouter(Routing);
