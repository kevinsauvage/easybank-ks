import React from "react";
import "./Banner.css";
import Button from "./Button";
import Fade from "react-reveal/Fade";

const Banner = ({ setIsOpen }) => {
  return (
    <div className="banner flex-jc-c" onClick={() => setIsOpen(false)}>
      <div className="container">
        <Fade bottom cascade>
          <div className="banner__left">
            <h1>Next generation digital banking</h1>
            <h2>
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </h2>
            <Button />
          </div>
        </Fade>
        <div className="banner__right"></div>
      </div>
    </div>
  );
};

export default Banner;
