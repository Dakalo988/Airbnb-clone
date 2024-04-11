import React from "react";
import "./Cards.css";

const Cards = ({ src, title, decription, price }) => {
  return (
    <div className="card">
      <img src={src} alt="" />
      <div className="card_info">
        <h2>{title}</h2>
        <h4>{decription}</h4>
        <h3>{price}</h3>
      </div>
    </div>
  );
};

export default Cards;
