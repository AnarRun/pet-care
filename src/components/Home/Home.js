import React from "react";
import "./Home.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone} from '@fortawesome/free-solid-svg-icons'
import { faBookmark } from "@fortawesome/free-regular-svg-icons";

export default function Home() {
  return (
    <>
      <Header />
      <div className="containerHome">
        <div className="leftDiv">
          <div className="sliderArea">
            <h1>Saving Animals Changing Live</h1>
            <p>
              Far far away, behind the word mountains, far from the countries
              vokalia.
            </p>
            <div className="hero-btn-div">
              <a href="#" className="hero-btn">
                Our Services
              </a>
            </div>
          </div>

          <div className="pets-bye">
            <img src={require("../../assets/woner-img.jpg.webp")} alt="" />
            <h2>
              The Kind of Care Your
              <br /> Pets Deserve
            </h2>
            <div className="save-icon">
            <FontAwesomeIcon icon={faBookmark} />
            </div>
          </div>
        </div>
      </div>
      <h2 className="title">Our Pet Care Services</h2>
      <div className="slidesAll">
        <div className="slide">
          <img src={require("../../assets/services2.jpg.webp")} alt="" />

          <div className="services-caption">
            <h3>
              <a href="#">Pet Traning</a>
            </h3>
            <p>Far far away, behind the word mountains, far.</p>
          </div>
        </div>
        <div className="slide">
          <img src={require("../../assets/services2.jpg.webp")} alt="" />

          <div className="services-caption">
            <h3>
              <a href="#">Pet Traning</a>
            </h3>
            <p>Far far away, behind the word mountains, far.</p>
          </div>
        </div>
        <div className="slide">
          <img src={require("../../assets/services2.jpg.webp")} alt="" />

          <div className="services-caption">
            <h3>
              <a href="#">Pet Traning</a>
            </h3>
            <p>Far far away, behind the word mountains, far.</p>
          </div>
        </div>
      </div>
      <div className="learn-more-container">
        <div className="left-learn-more">
          <img src={require("../../assets/about1.jpg.webp")} alt="" />
          <div className="video-make">
            <a href="#">
              <img
                src={require("../../assets/play_circle_FILL0_wght400_GRAD0_opsz48.png")}
                alt=""
              />
            </a>
            <h3>
              Play the video <br /> to see more
            </h3>
          </div>
        </div>

        <div className="right-learn-more">
          <h2>
            Animals has come
            <br /> to mean so much
            <br /> in t live
          </h2>
          <p className="pt-20">
            Far far away, behind the word mountains, far from the countries
            vokalia.
          </p>
          <p>
            Mollit anim laborum.Dvcuis aute serunt iruxvfg dhjkolo indd re
            voluptate velit esscillumlore eu quife nrulla parihatur.
            Excghcepteur sfwsignjnt occa cupidatat non more than aute.
          </p>
          <div className="learn-btn">
            <a href="#" className="btn-a">
              Learn More
            </a>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="block">
        <FontAwesomeIcon icon={faPhone} />
          <h5>
            <a href="#">For Emergency care Just Call Us</a>
          </h5>
          <ul>
            <li>Mon - Fri (9.00-6.00)</li>
            <li>Sat - Sun (2.30-7.00)</li>
          </ul>
          <a href="#" className="logbtn">
            +10 (89) 837 3678
          </a>
        </div>
      </div>
      <div className="donation-contain" style={{marginTop: 50}}>

        <div className="texts">
            <h2 className="texts-h2">We looking for helping hand</h2>
            <p className="texts-p">Far far away, behind the word mountains, far from the countries vokalia.
                Dvcuis <br/> aute serunt iruxvfg dhjkolohr indd re voluptate </p>
                <a href="#" className="first-a">Learn More</a>
                <a href="#" className="second-a">Make a Donation</a>
        </div>
    </div>
    <Footer />
    </>
  );
}
