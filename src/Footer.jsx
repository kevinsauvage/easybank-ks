import React from "react";
import "./Footer.css";
import Logo from "./assets/images/logo-footer.svg";
import { AiFillFacebook, AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { FaPinterestSquare, FaTwitter } from "react-icons/fa";
import Button from "./Button";
import Fade from "react-reveal/Fade";

const Footer = () => {
  return (
    <Fade bottom cascade>
      <footer className="flex-jc-c">
        <div className="container">
          <div className="footer__wrapper flex-jc-sb">
            <div className="footer__left flex-jc-sb">
              <img src={Logo} alt="logo" className="logo" />
              <div className="footer__left__icons flex-jc-sb">
                <AiFillFacebook size={20} fill="white" />
                <AiFillYoutube size={20} fill="white" />
                <FaTwitter size={20} fill="white" />
                <FaPinterestSquare size={20} fill="white" />
                <AiFillInstagram size={20} fill="white" />
              </div>
            </div>
            <div className="footer__nav__left">
              <ul className="flex-jc-sb">
                <li>About</li>
                <li>Contact</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className="footer__nav__right">
              <ul className="flex-jc-sb">
                <li>Careers</li>
                <li>Support</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
          <div className="footer__right flex-jc-sb">
            <Button />
            <p>© Easybank. All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </Fade>
  );
};

export default Footer;
