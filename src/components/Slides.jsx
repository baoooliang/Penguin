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
