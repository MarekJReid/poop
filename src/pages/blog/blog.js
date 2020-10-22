import React, { useState, useEffect, useRef } from "react";
import {gsap} from 'gsap'
import "./blog.scss";

import blogs from "./blogs.json";


function Blog() {
  const [numBlogs, setNumBlogs] = useState(3);
  
  let blogsGrid = useRef(null)

    const clickSetNumBlogs = () => {
        setNumBlogs(numBlogs + 3)
        
    }

    const clickSetNumBlogsToNull = () => {
        setNumBlogs(numBlogs - numBlogs + 3 )
        console.log(numBlogs)
        
    }


    useEffect(() => {
        gsap.from(blogsGrid.children, {
            x: -100,
            autoAlpha: 1,
            stagger: { // wrap advanced options in an object
                
                each: 0.1,
                from: "right",
                grid: "auto",
                ease: "power2.inOut",
                
              }
        })
    })
     
 
// let blogs = 3
  return (
    <div
      style={{
        height: `90vh`,
        marginTop: `10vh`,
        display: `flex`,
        justifyContent: `center`,
      }}
    >
      <div className="blog-constainer">
        <div className="blog-intro-box">
          <div className="blog-title">
            <h1>blogs are great</h1>
          </div>
          <div className="blog-subtitle">
            <h3>You should read all of our blogs</h3>
          </div>
          <div className="blog-para">
            <p>
              Ducks. There how preparation such are the to the luxury discharge
              and my cons, refute. What cache a following the do and its
              continued then it was have frequency of in which, good to parks.
            </p>
          </div>
        </div>

        <div className="blog-grid" ref={(el) => (blogsGrid = el)}>
          {blogs.map((item) =>
            item.id < numBlogs ? (
                
              <div className="blog-card">
                  
                  
                <div className="blog-card-pic">
                  <img
                    src={`https://picsum.photos/id/${item.img}/300`}
                    alt=""
                  />{" "}
                </div>
                <div className="blog-card-text">
                  <h1>{item.title}</h1>
                  <div className="seperating-line"></div>
                  <div className="blog-card-subtitle">
                    <h3>{item.author}</h3>
                  </div>
                  <div className="blog-card-author-info">
                    <span> {item.authorInfo}</span>
                  </div>
                  <div className="blog-intro">{item.para.slice(0, 200)}</div>
                  
                  <div className="blog-card-button-box">
                
                  <div className="blog-card-button">
                    <p>Read More</p>
                  </div>
                </div>
                </div>
                
              </div>
            ) : null
          )}
        
      
 
    
 
           
          {blogs.length -1 >= numBlogs ? (
              <div className="load-more-cards"
              onClick={clickSetNumBlogs}
              >load more</div>
          ) : null }
          {blogs.length -1 <= numBlogs ? (
              <div className="load-more-cards"
              onClick={clickSetNumBlogsToNull}
              >Back to top</div>
          ) : null }
          
          
        </div>
      </div>
    </div>
  );
}

export default Blog;
