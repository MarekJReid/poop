import React from 'react'
import "./App.scss";




import Hero from './hero'
import BoxPicLeft from "./boxPicLeft";
import BoxPicRight from "./boxPicRight";

function Landing() {
    return (
        <div>
            <Hero />
      <BoxPicLeft boxId = {"0"} />
      <BoxPicRight boxId = {"1"} />
      <BoxPicLeft boxId = {"2"} />
      <div className="footer">
        <div className="footer-box">
          <h2>Footer Section</h2>
        </div>
      </div>
        </div>
    )
}

export default Landing
