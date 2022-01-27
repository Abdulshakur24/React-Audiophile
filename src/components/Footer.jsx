import React from "react";
import { ReactComponent as AudiophileIcon } from "../assets/Audiophile.svg";
import { ReactComponent as FacebookIcon } from "../assets/facebookIcon.svg";
import { ReactComponent as TwitterIcon } from "../assets/twitterIcon.svg";
import { ReactComponent as InstagramIcon } from "../assets/instagramIcon.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-contents">
          <div className="barrier" />
          <div className="row-one">
            <AudiophileIcon className="audio-svg" />
            <div className="links">
              <a href="#home">HOME</a>
              <a href="#headphones">HEADPHONES</a>
              <a href="#speaker">SPEAKERS</a>
              <a href="#earphones">EARPHONES</a>
            </div>
          </div>
          <div className="row-two">
            <p>
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </p>
          </div>
          <div className="row-three">
            <p>Copyright 2021. All Rights Reserved</p>
            <div className="icons">
              <a href="#facebook">
                <FacebookIcon className="icon" />
              </a>
              <a href="#twitter">
                <TwitterIcon className="icon" />
              </a>
              <a href="#instagram">
                <InstagramIcon className="icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
