import React from "react";
import "./Card.css";

const Card = ({ img, title, text }) => {
  return (
    <div className="card">
      <img src={img} alt="" />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default Card;
