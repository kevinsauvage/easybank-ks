import React, { useRef } from "react";
import "./Header.css";
import Logo from "./assets/images/logo.svg";
import Button from "./Button";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Header = ({ isOpen, setIsOpen }) => {
  const menu = useRef(null);
  const menuHamb = useRef(null);

  if (isOpen) {
    document.querySelector("body").style.overflow = "hidden";
  } else {
    document.querySelector("body").style.overflow = "";
  }

  const handleClickOutsideMenu = (e) => {
    if (menu.current && !menu.current.contains(e.target)) {
      setIsOpen(false);
    }
  };
  return (
    <header className="flex-jc-c-ai-c">
      <div className="container">
        <img src={Logo} alt="" className="logo" />
        <nav
          className={isOpen ? "isOpen" : undefined}
          onClick={handleClickOutsideMenu}>
          <ul ref={menu} className="flex-jc-sb-ai-center">
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
        <div
          ref={menuHamb}
          onClick={() => setIsOpen(!isOpen)}
          className="hamburger__menu">
          {isOpen ? <AiOutlineClose size={30} /> : <HiMenu size={25} />}
        </div>
      </div>
    </header>
  );
};

export default Header;
