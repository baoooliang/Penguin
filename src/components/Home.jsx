import React from "react";
import home from "../assets/combat1.png";
import penguins from "../assets/3DPenguins.png";
export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="content">
          <p className="sub-title">Launching Soon</p>
          <h1 className="title">Protective Penguin</h1>
          <p className="description">
            Don't miss out on the release of our new NFT
          </p>
          <button>Connect</button>
        </div>
        <div className="image-container">
          <div className="image">
            <img src={penguins} alt="home image" />
          </div>
          <div className="ellipse-container">
            <div className="ellipse pink"></div>
            <div className="ellipse orange"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
