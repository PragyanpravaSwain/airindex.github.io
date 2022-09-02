import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-container-head">
        <div className="footer-container-head-text">Connect with us</div>
        <div className="brand-icon">
          <FontAwesomeIcon icon={faFacebook} size="xl" />
        </div>
        <div className="brand-icon">
          <FontAwesomeIcon icon={faTwitter} size="xl" />
        </div>
        <div className="brand-icon">
          <FontAwesomeIcon icon={faInstagram} size="xl" />
        </div>
        <div className="brand-icon">
          <FontAwesomeIcon icon={faYoutube} size="xl" />
        </div>
      </div>
      <div className="feedback">
        <div className="feedback-text">
          <a>Feedback</a>
        </div>
        <div className="feedback-text">
          <a>Weather API</a>
        </div>
        <div className="feedback-text">
          <a>Press Room</a>
        </div>
      </div>
      <div className="terms">
        <div className="terms-text">Terms of Use</div>
        <div className="terms-text-divider">I</div>
        <div className="terms-text">Privacy Policy</div>
        <div className="terms-text-divider">I</div>
        <div className="terms-text">Accessibility Statement</div>
        <div className="terms-text-divider">I</div>
        <div className="terms-text">Data Vendors</div>
      </div>
      <div className="footer-recognise">
        We recognise our responsibility to use data and technology for good.
        Take control of your data.
      </div>
      <div className="data-rights">
        <div className="data-rights-text">Data Rights</div>
      </div>
      <div className="footer-recognise">
        © Copyright  2020,2022
      </div>
      <div className="power">
        <div className="power-text">Powered by the</div>
        <div className="power-logo">Logo</div>
      </div>
    </div>
  );
};

export default Footer;
