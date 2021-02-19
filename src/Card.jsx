import React from "react";
import "./Card.css";
import Fade from "react-reveal/Fade";

const Card = ({ img, title, text }) => {
  return (
    <Fade bottom cascade>
      <div className="card">
        <img src={img} alt="" />
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </Fade>
  );
};

export default Card;
