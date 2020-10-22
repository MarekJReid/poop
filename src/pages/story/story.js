import React, { useState, useEffect, useRef } from "react";
import {gsap} from 'gsap'
import "./story.scss";

import stories from "./stories.json";
import { setConstantValue, isTemplateSpan } from "typescript";

function Story() {
  const [numBlogs, setNumBlogs] = useState(3);
  
  let storiesGrid = useRef(null)

    const clickSetNumBlogs = () => {
        setNumBlogs(numBlogs + 3)
        
    }

    const clickSetNumBlogsToNull = () => {
        setNumBlogs(numBlogs - numBlogs + 3 )
        console.log(numBlogs)
        
    }


    useEffect(() => {
        gsap.to(storiesGrid.children, {
            y: -100,
            autoAlpha: 1,
            stagger: { // wrap advanced options in an object
                
                each: 0.1,
                from: "right",
                grid: "auto",
                ease: "power2.inOut",
                
              }
        })
    })
     
 
let blogs = 3
  return (
    <div
      style={{
        height: `90vh`,
        marginTop: `10vh`,
        display: `flex`,
        justifyContent: `center`,
      }}
    >
      <div className="stories-constainer">
        <div className="stories-intro-box">
          <div className="stories-title">
            <h1>Stories are great</h1>
          </div>
          <div className="stories-subtitle">
            <h3>You should read all of our stories</h3>
          </div>
          <div className="stories-para">
            <p>
              Ducks. There how preparation such are the to the luxury discharge
              and my cons, refute. What cache a following the do and its
              continued then it was have frequency of in which, good to parks.
            </p>
          </div>
        </div>

        <div className="stories-grid" ref={(el) => (storiesGrid = el)}>
          {stories.map((item) =>
            item.id < numBlogs ? (
                
              <div className="story-card">
                  
                  
                <div className="story-card-pic">
                  <img
                    src={`https://picsum.photos/id/${item.img}/300`}
                    alt=""
                  />{" "}
                </div>
                <div className="story-card-text">
                  <h1>{item.title}</h1>
                  <div className="seperating-line"></div>
                  <div className="story-card-subtitle">
                    <h3>{item.author}</h3>
                  </div>
                  <div className="story-card-author-info">
                    <span> {item.authorInfo}</span>
                  </div>
                  <div className="story-intro">{item.para.slice(0, 200)}</div>
                </div>
                <div className="story-card-button-box">
                
                  <div className="story-card-button">
                    <p>Read More</p>
                  </div>
                </div>
              </div>
            ) : null
          )}
        
      
 
    
 
           
          {stories.length -1 >= numBlogs ? (
              <div className="load-more-cards"
              onClick={clickSetNumBlogs}
              >load more</div>
          ) : null }
          {stories.length -1 <= numBlogs ? (
              <div className="load-more-cards"
              onClick={clickSetNumBlogsToNull}
              >Back to top</div>
          ) : null }
          
          
        </div>
      </div>
    </div>
  );
}

export default Story;
