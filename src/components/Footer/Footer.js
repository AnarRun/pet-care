import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faHeart, faLevelUpAlt} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <>
      <div className="mainFooter">
        <div className="ml-20">
          <div className="first">
            <div className="logo-a">
              <Link to={'/'}>
                <img src={require("../../assets/logo.png.webp")} alt="" />
              </Link>
            </div>
            <div className="logo-p">
              <p>
                Seddo eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Conse ctetur pisicin elit, sed do eiusmod tempor.
              </p>
            </div>
            <div className="social">
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faYoutube} />
            </div>
          </div>
          <div className="navigation">
            <h4>Navigation</h4>
            <ul>
              <li>
                <Link to={'/'} style={{color: "red"}}>Home</Link>
              </li>
              <li>
                <Link to={'/blog'}>Blog</Link>
              </li>
              <li>
                <Link to={'/contacts'}>Contact</Link>
              </li>
            </ul>
          </div>
          <div className="services">
            <h4>Services</h4>
            <ul>
              <li>
                <a href="#">Pet Care</a>
              </li>
              <li>
                <a href="#">Pet Treatment</a>
              </li>
              <li>
                <a href="#">Pet Training</a>
              </li>
              <li>
                <a href="#">Hygienic Care</a>
              </li>
            </ul>
          </div>
          <div className="last">
            <div className="last-text">
              <h4>Subscribe newsletter</h4>
              <p>
                Subscribe our newsletter to get updates about our services and
                offers.
              </p>
            </div>
            <div id="mc_embed_signup">
              <form target="_blank" className="form">
                <input
                  type="email"
                  name="EMAIL"
                  placeholder="Enter your email"
                  className="input"
                />
                <div className="form-icon">
                  <button type="submit" name="submit" className="button">
                  <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="byColorlib">
          <p>
            Copyright ©2023 All rights reserved | This template is made with
            <FontAwesomeIcon icon={faHeart} style={{color: "#dc3545"}} />
            by{" "}
            <p >
              Colorlib
            </p>
          </p>
        </div>
      </div>

      <div className="back-top">
        <Link title="Go to Top" to={'/'}>
          {" "}
          <FontAwesomeIcon icon={faLevelUpAlt} />
        </Link>
      </div>
    </>
  );
}
