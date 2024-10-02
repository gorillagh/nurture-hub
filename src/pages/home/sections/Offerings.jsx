import React from "react";
import './offerings.css';
import { FaMusic, FaCalculator, FaBookOpen, FaBook, FaBookmark } from "react-icons/fa";
import { MdOutlineChangeHistory } from "react-icons/md";

const offerings = [
  {
    icon: FaMusic, // Just refer to the component itself, not JSX
    iconColor: "#5CB100",
    title: "Music Class",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
  {
    icon: FaCalculator,
    iconColor: "#F7BD9D",
    title: "Math Class",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
  {
    icon: FaBookOpen,
    iconColor: "#4FB0DC",
    title: "English Class",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
  {
    icon: FaBook,
    iconColor: "#6B53AB",
    title: "Reading for Kids",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
  {
    icon: MdOutlineChangeHistory,
    iconColor: "#45C7A7",
    title: "History Class",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
  {
    icon: FaBookmark,
    iconColor: "#FD9800 ",
    title: "Active Class",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
];

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
          {offerings.map((offering, index) => {
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
