import React from "react";

import "./Card.css";

function Card({ value, description }) {
  return (
    <div className="quantity-card-container">
      {" "}
      <h3> {description}</h3> <h1> {value} </h1>
    </div>
  );
}

export default Card;
