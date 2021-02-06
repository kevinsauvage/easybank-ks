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
    <header>
      <div className="container">
        <img src={Logo} alt="" className="logo" />
        <nav className={isOpen ? "isOpen" : undefined}>
          <ul>
            <li onClick={() => setIsOpen(false)}>Home</li>
            <li onClick={() => setIsOpen(false)}>About</li>
            <li onClick={() => setIsOpen(false)}>Contact</li>
            <li onClick={() => setIsOpen(false)}>Blog</li>
            <li onClick={() => setIsOpen(false)}>Careers</li>
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
