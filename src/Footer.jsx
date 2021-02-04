import React from "react";
import "./Footer.css";
import Logo from "./assets/images/logo-footer.svg";
import { AiFillFacebook, AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { FaPinterestSquare, FaTwitter } from "react-icons/fa";
import Button from "./Button";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__left">
            <img src={Logo} alt="" className="logo" />
            <div className="footer__left__icons">
              <AiFillFacebook size={20} fill="white" />
              <AiFillYoutube size={20} fill="white" />
              <FaTwitter size={20} fill="white" />
              <FaPinterestSquare size={20} fill="white" />
              <AiFillInstagram size={20} fill="white" />
            </div>
          </div>
          <div className="footer__nav__left">
            <ul>
              <li>About</li>
              <li>Contact</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="footer__nav__right">
            <ul>
              <li>Careers</li>
              <li>Support</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
        <div className="footer__right">
          <Button />
          <p>© Easybank. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
