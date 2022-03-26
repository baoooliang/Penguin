import React from "react";
import 'react-slideshow-image/dist/styles.css'
import roadmap from "../assets/roadmap.png";



export default function Plan() {  
  return (
    <div className="plan-container">
      <div className="intro">
        <h2 className="title">Our Plan</h2>
        <div className="description-box">
          <p className="description">We are dedicated to making our world a better place. Half of the profit will be used to 
          support refugees, stop global warming, and donate to other charity events</p>
        </div>
      </div>
      <img class='roadmap' src={roadmap}/>
    </div>
  )
}
