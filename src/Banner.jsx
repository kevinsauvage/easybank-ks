import React from "react";
import "./Banner.css";
import Button from "./Button";

const Banner = ({ setIsOpen }) => {
  return (
    <div className="banner" onClick={() => setIsOpen(false)}>
      <div className="container">
        <div className="banner__left">
          <h1>Next generation digital banking</h1>
          <h2>
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </h2>
          <Button />
        </div>
        <div className="banner__right"></div>
      </div>
    </div>
  );
};

export default Banner;
