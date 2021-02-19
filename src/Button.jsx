import React from "react";
import "./Button.css";
import Fade from "react-reveal/Fade";

const Button = () => {
  return (
    <Fade bottom cascade>
      <button className="button flex-jc-c-ai-c">
        <p>Request Invite</p>
      </button>
    </Fade>
  );
};

export default Button;
