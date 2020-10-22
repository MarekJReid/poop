import React, { useRef, useEffect } from "react";



import "./App.scss";

import {heroBoxTrans} from './animations'

function Hero() {
  let heroBox = useRef(null);
  let heroTextBox = useRef(null);
  let heroTextBoxText;




  useEffect(() => {
   heroBoxTrans(heroBox, heroTextBox, heroTextBoxText)
  }, []);

  return (
    <div>
     
      <div className="box-hero" ref={(el) => (heroBox = el)}>

        <div className="animation-box" ref={(el) => (heroTextBox = el)}>
          <div
            className="animation-text-box"
            ref={(el) => (heroTextBoxText = el)}
          >
            <h1>Welcome to the site to sell you things</h1>
            <h3>Lots and lots and lots of things</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
