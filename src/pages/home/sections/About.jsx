import React from "react";
import aboutImage from '../../../assets/images/about_1.jpg'
import "./about.css"
import { FaCheck } from "react-icons/fa";


const About = () => {
  return (
    <div>
        <div className="about-content">
          <div className="about-text">
            <div>
            <h2>About Us</h2>
            <hr />
            </div>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
            <div className="about-list">
            <p>
             <FaCheck className="about-icon" /> <span>Separated they live</span>
            </p>
            <p>
            <FaCheck className="about-icon" />   <span>Slarge language ocean</span>
            </p>
            <p>
            <FaCheck className="about-icon" />  <span>Bookmarksgrove right at the coast</span>
            </p></div>
            <div className="about-stats">
              <div className="about-stat">
                <h2>4,000</h2>
                <p>Students</p>
              </div>
              <div className="about-stat">
                <h2>49</h2>
                <p>Teachers</p>
              </div>
              <div className="about-stat">
                <h2>12</h2>
                <p>Awards</p>
              </div>
            </div>
            <div className="about-buttons">
               <a href="/"> <button  className="btn-primary">ADMISSION</button></a>
               <a href="/"></a> <button className="btn-secondary">LEARN MORE</button>
            </div>
          </div>
          <div className="about-image">
            <img src={aboutImage} alt="About image" />
          </div>
        </div>
    </div>
  );
};

export default About;
