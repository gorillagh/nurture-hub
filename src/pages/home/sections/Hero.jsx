import React from "react";

import "../sections/hero.css";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-overlay">
        <div className="container">
          {/* -----Nav section--- */}
          <div className="nav-section">
            <div className="top-nav">
              <div className="contact-info">
                <a href="">have a question</a>
                <a href="">+233 240 298910</a>
                <a href="">albertnartey824@gmail.com</a>
              </div>
              <div className="signin-signup">
                <a href="">Log In</a>
                <a href="">Register</a>
              </div>
            </div>
            <nav className="hero-nav">
              <div id="logo">
                <a href="/">
                  <h1>Nurture</h1>
                </a>
              </div>

              <div className="nav-links">
                <a href="/">Home</a>
                <a href="/">Our Staff</a>
                <a href="/">Gallery</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
              </div>

              <div className="nav-cta-button">
                <a href="">
                  <button className="btn-primary">Enroll Now</button>
                </a>
              </div>
            </nav>
          </div>

          {/* -----Hero-content---- */}
          <div className="hero-content">
            <div className="hero-text">
              <h1>Learning Center for Your Kids</h1>
              <p>
                Another free template by Colorlib. Far far away, behind the word
                mountains, far from the countries Vokalia and Consonantia, there
                live the blind texts.
              </p>
              <a href="">
                <button className="btn-primary">Explore Now</button>
              </a>
            </div>
            <div className="hero-play">
                <button id="play-button"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
