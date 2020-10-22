import React from "react";
import {
  Link,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import "../subnav/sub-nav-side.scss";

let links = [{ item: 1 }, { item: 2 }, { item: 3 }, { item: 4 }];

function SideNav() {
  let { path, url } = useRouteMatch();
  return (
    <div className="side-nav-box">
      <div className="nav-links">
        <ul>
          
          {links.map(({ item }) => 
         item > 1 ? 
         (
          <li>
            <Link to={`${url}/${item}`}> Item {item}</Link>
          </li>
        )
         :
         (
          <li>
            <Link to={`${url}`}>Home</Link>
          </li>
        )
        
          )}
        </ul>
      </div>
    </div>
  );
}

export default SideNav;
