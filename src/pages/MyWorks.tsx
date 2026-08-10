import { Link } from "react-router-dom";
import { config } from "../config";
import "./MyWorks.css";

const LANGUAGE_COLORS: Record<string, string> = {
  Python: "#3572A5",
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  HTML: "#e34c26",
  "Jupyter Notebook": "#DA5B0B",
};

const MyWorks = () => {
  return (
    <div className="myworks-page">
      <div className="myworks-header">
        <Link to="/" className="back-button" data-cursor="disable">
          <span className="back-button-arrow">←</span> Back to Home
        </Link>
        <h1>
          All <span>Works</span>
        </h1>
        <p>A collection of all my projects and creations</p>
      </div>

      <div className="myworks-grid">
        {config.projects.map((project, index) => (
          <a
            className="myworks-card"
            key={project.id}
            data-cursor="disable"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="myworks-card-number">0{index + 1}</div>
            {project.demoLink && (
              <span
                className="myworks-card-demo"
                data-cursor="disable"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  window.open(project.demoLink, "_blank", "noopener,noreferrer");
                }}
              >
                Live Demo ↗
              </span>
            )}
            <div className="myworks-card-image">
              {project.image ? (
                <img
                  className="myworks-card-image-img"
                  src={project.image}
                  alt={project.title}
                />
              ) : (
                <div
                  className="myworks-card-image-placeholder"
                  style={{
                    background: LANGUAGE_COLORS[project.language] ?? "#444",
                  }}
                >
                  <span>{project.title}</span>
                </div>
              )}
            </div>
            <div className="myworks-card-info">
              <h3>{project.title}</h3>
              <p className="myworks-card-category">{project.category}</p>
              <p className="myworks-card-description">{project.description}</p>
              <p className="myworks-card-tech">{project.technologies}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default MyWorks;
