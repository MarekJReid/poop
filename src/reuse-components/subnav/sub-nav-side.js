import React, {useEffect, useRef} from "react";
import "../subnav/sub-nav-side.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation,
  useParams,
  NavLink,
  useRouteMatch,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import SideNav from "./sideNav";
import SideNavLanding from "./side-nav-landing";
import ContentBox from "./content-box";
import gsap from "gsap/gsap-core";





function SubNavSide() {
  let location = useLocation();
  let { path, url } = useRouteMatch();
  let container = useRef(null)
  let containerLanding = useRef(null)
  
  useEffect(() => {
    // gsap.to(containerLanding, 2,{display: "block", opacity: 1, delay: 1} )
  }, []);
  const onEnter = () => {
    gsap.to(container, 1,{ opacity: 1, delay: 1} )
 
    console.log('pooping now')
    
    
  }
  
  const onExit = () => {
    console.log('lost my shit')
    gsap.to(container, 5, {autoAlpha: 0, delay: 10} )
   

  };
  return (
    <div className="sub-side-nav">
   
      <SideNav />
      <TransitionGroup>
        {/*
            This is no different than other usage of
            <CSSTransition>, just make sure to pass
            `location` to `Switch` so it can match
            the old location as it animates out.
          */}
       <CSSTransition
          in={location !== null}
          key={location.key}
          classNames="my-node"
          onEnter={onEnter}
          onExit={onExit}
          timeout={500}
            unmountOnExit
            
        >
          <Switch location={location}>
            
            <Route exact path={path}>
            <div ref={(el) => (container = el)} >
              <SideNavLanding />
              </div>
            </Route>
            
            <Route path={`${path}/:item`}>
              <div ref={(el) => (container = el)}  >
                <ContentBox />
              </div>
            </Route>
           
            
          </Switch>
        </CSSTransition>
      </TransitionGroup> 
      
    </div>
  );
}

export default SubNavSide;
