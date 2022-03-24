import React from "react";
import clients1 from "../assets/airForce.png";
import clients2 from "../assets/army.png";
import clients3 from "../assets/combat.png";
import clients4 from "../assets/marine.png";
import clients5 from "../assets/navy.png";
import clients6 from "../assets/space.png";

export default function Clients() {
  const data = [clients1, clients2, clients3, clients4, clients5, clients6];
  return (
    <div className="clients">
      <div className="container">
        <div className="clients-container">
          {data.map((client, index) => (
            <div className="client" key={index}>
              <img className="clientImg" src={client} alt="client" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
