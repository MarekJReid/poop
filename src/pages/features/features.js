import React from "react";

import "./features.scss";

import FeaturesListMenu from './features-list-menu'

function Features() {
  return (
    <div
      style={{
        height: `90vh`,
        marginTop: `10vh`,
        background: `#fffacd`,
        width: `100vw`,
      }}
    >
    
      <div className="features-container">
        <div className="features-intro-section">
          <div className="features-heading">
            {" "}
            <h1>I am the features page</h1>{" "}
          </div>
          <div className="features-para">
            {" "}
            <p>
              Firmament divide. Was she'd there tree sixth years Above. Years
              beast. Be very created days seas cattle signs don't our fly
              greater every don't form gathered upon, whales from fill seasons a
              dry behold is darkness he green they're under lesser, open tree
              brought spirit two forth. They're herb gathered.
            </p>{" "}
          </div>
          <div className="features-chose-feature-box">
            <span className="features-chose-intro-text"> <p>Select one of the countries from the list to see more</p></span>
            <span className="features-chose-intro-dropdown"><FeaturesListMenu /></span>
          </div>
        </div>
        <div className="features-landing-image">
         
        </div>
      </div>
  
    </div>
  );
}

export default Features;
