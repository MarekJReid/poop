import React, {useRef, useEffect} from "react";
import {gsap} from 'gsap'
import "./store.scss";
function Store() {

    let pic = useRef(null)
    let textBox = useRef(null)



    useEffect(() => {
        gsap.fromTo(pic, 1, {height: 0}, {height: "100%"} )
        gsap.to(textBox, 1, {height: "100%", opacity: 1})
    })
  return (
    <div
      style={{
        height: `90vh`,
        marginTop: `10vh`,
        display: `flex`,
        justifyContent: `center`,
        justifyItems: `center`
      }}
    >
      <div className="store-page-container">
      <div className="store-page-image">
            <img src={`https://picsum.photos/id/177/1000/250`} alt="" ref={(el) => (pic = el)} />
          </div>
        <div className="store-page-section">
          
          <div className="store-page-intro-box" ref={(el) => (textBox = el)}>
            <div className="store-page-intro-box-heading">
              <h1>Hi I am the store intro title</h1>
            </div>
            <div className="store-page-intro-box-para">
              <p>
                One morning, when Gregor Samsa woke from troubled dreams, he
                found himself transformed in his bed into a horrible vermin. He
                lay on his armour-like back, and if he lifted his head a little
                he could see his brown belly, slightly domed and divided by
                arches into stiff sections.
              </p>
            </div>
            <div className="store-page-link-button">I am a link button</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Store;
