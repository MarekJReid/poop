import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";


import SubNavHome from './subNavHome'
// Since routes are regular React components, they
// may be rendered anywhere in the app, including in
// child elements.
//
// This helps when it's time to code-split your app
// into multiple bundles because code-splitting a
// React Router app is the same as code-splitting
// any other React app.

export default function SubNav() {
  return (
    <Router>
    
        

        <hr />

        <Switch>
          <Route exact path="/subnav">
            <SubNavHome />
          </Route>
          <Route path="/subnav/topics">
            <Topics />
          </Route>
        </Switch>
    
    </Router>
  );
}




