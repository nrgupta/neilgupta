import { Link } from "react-router-dom";
import { config } from "../config";
import "./Hobbies.css";

const Hobbies = () => {
  return (
    <div className="hobbies-page">
      <div className="hobbies-header">
        <Link to="/" className="back-button" data-cursor="disable">
          <span className="back-button-arrow">←</span> Back to Home
        </Link>
        <h1>
          My <span>Hobbies</span>
        </h1>
        <p>What I do outside of work</p>
      </div>

      <div className="hobbies-list">
        {config.hobbies.map((hobby) => (
          <div className="hobby-card" key={hobby.title}>
            <h2>{hobby.title}</h2>
            <p>{hobby.description}</p>
            {hobby.link && (
              <a
                href={hobby.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hobby-link"
                data-cursor="disable"
              >
                View on Hudl →
              </a>
            )}
            {hobby.images && (
              <div className="hobby-photo-grid">
                {hobby.images.map((image) => (
                  <img src={image} alt={hobby.title} key={image} />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hobbies;
