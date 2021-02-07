import React from "react";
import "./Header.css";
import Logo from "./assets/images/logo.svg";
import Button from "./Button";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Header = ({ isOpen, setIsOpen }) => {
  if (isOpen) {
    document.querySelector("body").style.overflow = "hidden";
  } else {
    document.querySelector("body").style.overflow = "";
  }

  return (
    <header className="flex-jc-c-ai-c">
      <div className="container">
        <img src={Logo} alt="" className="logo" />
        <nav className={isOpen ? "isOpen" : undefined}>
          <ul className="flex-jc-sb-ai-center">
            <li onClick={() => setIsOpen(false)} className="flex-ai-c">
              Home
            </li>
            <li onClick={() => setIsOpen(false)} className="flex-ai-c">
              About
            </li>
            <li onClick={() => setIsOpen(false)} className="flex-ai-c">
              Contact
            </li>
            <li onClick={() => setIsOpen(false)} className="flex-ai-c">
              Blog
            </li>
            <li onClick={() => setIsOpen(false)} className="flex-ai-c">
              Careers
            </li>
          </ul>
        </nav>
        <div className="button__container">
          <Button />
        </div>
        <div onClick={() => setIsOpen(!isOpen)} className="hamburger__menu">
          {isOpen ? <AiOutlineClose size={30} /> : <HiMenu size={25} />}
        </div>
      </div>
    </header>
  );
};

export default Header;
