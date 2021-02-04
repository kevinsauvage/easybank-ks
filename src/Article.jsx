import React from "react";
import "./Article.css";

const Article = ({ img, name, title, text }) => {
  return (
    <div className="article">
      <div
        className="article__image"
        style={{ backgroundImage: `url(${img})` }}></div>
      <div className="article__text__container">
        <p>{name}</p>
        <h3>{title}</h3>
        <h4>{text}</h4>
      </div>
    </div>
  );
};

export default Article;
