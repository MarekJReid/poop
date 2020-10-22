import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";



import SubNavSide from '../../reuse-components/subnav/sub-nav-side'

function About() {

  return (
    <div
      style={{
        height: `90vh`,
        marginTop: `10vh`,
      }}
    >
 {/* <h1>About Page</h1> */}
      <SubNavSide />
    </div>
  );
}

export default About;
