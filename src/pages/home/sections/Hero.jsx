import {
  FaRegQuestionCircle,
  FaPhoneAlt,
  FaEnvelope,
  FaRegUser,
  FaLock,
  FaPlay,
} from "react-icons/fa";

import "../sections/hero.css";
import { useEffect } from "react";

const Hero = () => {
  // useEffect to handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector(".hero-nav");
      if (window.scrollY > 100) {
        nav.classList.add("hero-nav-scroll");
      } else {
        nav.classList.remove("hero-nav-scroll");
      }
    };

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="hero-section">
      <div className="hero-overlay">
        {/* <div className="container"> */}
        {/* -----Nav section--- */}

        <div className="nav-section">
          <div className="container">
            <div className="top-nav">
              <div className="contact-info">
                <a href="">
                  <FaRegQuestionCircle />
                  <span>have a question</span>
                </a>

                <a href="">
                  <FaPhoneAlt />
                  <span>+233 240 298910</span>
                </a>
                <a href="">
                  <FaEnvelope />
                  <span>info@nurturehub.com</span>
                </a>
              </div>
              <div className="signin-signup">
                <a href="">
                  <FaLock /> <span>Log In</span>
                </a>
                <a href="">
                  <FaRegUser /> <span>Register</span>
                </a>
              </div>
            </div>
          </div>
          <nav className="hero-nav ">
            <div className="container">
              <div className="nav-bar">
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
              </div>
            </div>
          </nav>
        </div>

        {/* -----Hero-content---- */}
        <div className="container">
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
              <div className="play-button-outer-container">
                <div className="play-button-container">
                  <div className="play-button">
                    <FaPlay size={40} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Hero;
