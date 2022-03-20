import React from "react";
import Card from "./Card";
import icon from "../assets/icon.png";
import penguin from "../assets/Penguin.png";

export default function Free() {
  return (
    <div className="free">
      <div className="container">
        <div className="background">
          <div className="ellipse pink"></div>
          <div className="ellipse green"></div>
        </div>
        <div className="content">
          <div className="image">
            <img src={icon} alt="icon" />
          </div>
          <h2 className="title">Presale for early birds</h2>
          <p className="description">
            Join our Discord, and get on the whitelist
          </p>
        </div>
      </div>
      <div className="cards">
        <div className="card1">
          <Card
            image={penguin}
            series="Gloop Series"
            title="Purple Man"
            price={2.99}
            tag={12983}
            time={1}
          />
        </div>
        <div className="card2">
          <Card
            image={penguin}
            series="Gloop Series"
            title="Purple Man"
            price={3.95}
            tag="1094"
            time={2}
          />
        </div>
      </div>
    </div>
  );
}
