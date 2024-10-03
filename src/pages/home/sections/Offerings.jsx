import React from "react";
import './offerings.css';
import { FaMusic, FaCalculator, FaBookOpen, FaBook, FaBookmark } from "react-icons/fa";
import { MdOutlineChangeHistory } from "react-icons/md";

import K from "../../../constants";

const Offerings = () => {
  return (
    <section id="offerings">
      <div className="container">
        <div className="offerings-header">
          <div>
            <h2>What We Offer</h2>
            <hr />
          </div>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
        <div className="offerings-container">
          {K.OFFERINGS.map((offering, index) => {
            const IconComponent = offering.icon; // Dynamically set the icon component
            return (
              <div className="offering-card" key={index}>
                <IconComponent
                  style={{ color: offering.iconColor, fontSize: "2rem" }} // Set dynamic color and size
                />
                <h4>{offering.title}</h4>
                <p>{offering.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Offerings;
