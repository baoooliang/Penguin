import React from "react";
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import mission1 from "../assets/refugee.jpg";
import mission2 from "../assets/stopWar.jpg";
import mission3 from "../assets/climate.jpg";


export default function Slides() {
  const fadeImages = [
    {
    url: mission1,
    caption: ''
    },
    {
    url: mission2,
    caption: ''
    },
    {
    url: mission3,
    caption: ''
    },
  ];
  
  return (
    <div className="slide-container">
      <div className="intro">
        <h2 className="title">Our mission</h2>
        <div className="description-box">
          <p className="description">We are dedicated to making our world a better places. Half of the profit will used to 
          support refugees, stop global warming, and support other charity events</p>
        </div>
      </div>
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div className="each-fade" key={index}>
            <div className="image-container">
              <img src={fadeImage.url} />
            </div>
            <h2>{fadeImage.caption}</h2>
          </div>
        ))}
      </Fade>
    </div>
  )
}
