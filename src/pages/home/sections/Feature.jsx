import "./feature.css";

const features = [
  {
    icon: "",
    title: "Learn",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    backgroundColor: "#5CB100",
  },
  {
    icon: "",
    title: "Learn",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    backgroundColor: "#EC661F",
  },
  {
    icon: "",
    title: "Learn",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    backgroundColor: "#4FB0DC",
  },
];

const Feature = () => {
  return (
    <section id="feature-section">
      <div className="features-container">
        {features.map((feature, index) => {
          return (
            <div
              key={index}
              className="feature-card"
              style={{ backgroundColor: feature.backgroundColor }}
            >
              <i>{feature.icon}</i>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Feature;
