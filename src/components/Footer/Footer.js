import React from "react";
import "../../App.css";

function Footer() {
  return (
    <div className="footer-container">
      <hr />
      <hr />
      <div className="page-wrapper"></div>
      <footer>
        <div className="footer">
          <div className="footer-content">
            <div className="footer-section about">
              <h1 className="logo-text">
                <span className="logo-span">M</span>alwandla &nbsp;
                <span className="logo-span">H</span>lungwani
              </h1>
              <p className="footer-para">
                I am a creative, Web Developer from Johannesburg ZA
              </p>
              <div className="contact">
                <span>
                  <i className="fas fa-envelope"></i>&nbsp;
                  hlungwanimalwandlashaun@gmail.com
                </span>
              </div>
              <div className="socials">
                <a
                  href="https://www.facebook.com/malwandlashaun.hlungwani/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/malwandla-hlungwani-92443414b/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href="https://github.com/MalwandlaShaun/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="https://github.com/MalwandlaShaun/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            &copy; | Designed By Malwandla Hlungwani
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
