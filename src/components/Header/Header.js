import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  let [isClicked, setIsClicked] = useState(false);
  let showCloseBurger = () => {
    console.log("sadada");
    setIsClicked(!isClicked);
  };
  return (
    <>
      <div className="firstNav">
        <div className="leftNav">
          <ul>
            <li>
            <FontAwesomeIcon icon={faFacebook} />
            </li>
            <li>
            <FontAwesomeIcon icon={faInstagram} />
            </li>
            <li>
            <FontAwesomeIcon icon={faTwitter} />   
            </li>
            <li>
            <FontAwesomeIcon icon={faLinkedin} />  
            </li>
          </ul>
        </div>
        <div className="rightNav">
          <ul>
            <li>
            <FontAwesomeIcon icon={faLocationDot} />  
              <span>78/A, Green lane, NYC</span>
            </li>
            <li>
            <FontAwesomeIcon icon={faPhone} />  
              <span>+10 (78) 367 3674</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="contain">
        <div className="leftNavAlt">
          <Link to={"/"}>
            <img src={require("../../assets/logo.png.webp")} alt="" />
          </Link>
        </div>
        <div className="rightNavAll">
          <div className="rightNavAlt">
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/blog"}>Blog Details</Link>
              </li>
              <li>
                <Link to={"/contacts"}>Contact</Link>
              </li>
            </ul>
          </div>
          <div className="getQuetoDiv">
            <Link className="getQueto">Get Queto</Link>
          </div>
        </div>
      </div>
      <div className="mobile-menu">
        <div className="slicknav_menu">
          <button
            href="#"
            className="slicknav_btn"
            onClick={() => showCloseBurger()}
          >
            <div className="slicknav_menutxt">MENU</div>
            <div className="slicknav_icon">
              <div className="slicknav_icon-bar"></div>
              <div className="slicknav_icon-bar"></div>
              <div className="slicknav_icon-bar"></div>
            </div>
          </button>
          <div
            className="slicknav_nav"
            style={{ display: isClicked ? "block" : "none" }}
          >
            <div className="slicknav_nav_detail">
              <Link to={"/"}>Home</Link>
            </div>
            <div className="slicknav_nav_detail">
              <Link to={"/blog"}>Blog Details</Link>
            </div>
            <div className="slicknav_nav_detail">
              <Link to={"/contacts"}>Contact</Link>
            </div>
            <div className="header-right-btn">
              <Link className="header-btn">Get Quote</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
